import { Dialog, Listbox } from "@headlessui/react";
import { Input } from "../Input";
import { Button } from "../../Button";
import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import { iFormEditAnnouncement } from "./@types";
import { EditAnnouncementSchema } from "./annoucement.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../Contexts/UserContext";
import { iModel } from "../../../Contexts/UserContext/@types";
import { iAnnouncementProps } from "../../../Contexts/AuthContext/@types";

interface iFormEditAnnouncementProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  announcement: iAnnouncementProps;
}

export const FormEditAnnouncement = ({
  setOpen,
  announcement,
}: iFormEditAnnouncementProps) => {
  const { getModels, getCars, patchAnnouncement, brands, models } =
    useContext(UserContext);
  const [image, setImage] = useState<number[]>([]);

  const [brandSelected, setBrandSelected] = useState<string>("");
  const [modelSelected, setModelSelected] = useState<iModel | null>(null);
  const [activate, setActivate] = useState<boolean>(announcement.is_activate);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<iFormEditAnnouncement>({
    mode: "onBlur",
    resolver: zodResolver(EditAnnouncementSchema),
  });

  useEffect(() => {
    const init = () => {
      getCars().then(() => {
        selectModels(announcement.brand).then((models: iModel[]) =>
          findOneModel(models, announcement.model)
        );
      });
    };

    init();
  }, []);

  const setModelRegister = (model: iModel) => {
    setValue("fuel", model.fuel);
    setValue("year", model.year);
    setValue("price_fipe", model.value);
    setValue("model", model.name);
    setValue("brand", model.brand);
  };

  const submitForm = (
    data: iFormEditAnnouncement,
    announcementId: string
  ): void => {
    const imageGallery =
      getValues("image_gallery")?.filter((elem) => elem.image !== "") || [];

    setValue("image_gallery", imageGallery);
    setValue("is_activate", activate);

    patchAnnouncement(announcementId, data).then((status) =>
      status === 200 ? setOpen(false) : null
    );
  };

  const selectModels = async (brand: string) => {
    setBrandSelected(brand);
    return await getModels(brand).then((models) => {
      setModelSelected(models[0]);
      return models;
    });
  };

  const findOneModel = (models: iModel[], modelName: string) => {
    const newModel = models.find((elem) => elem.name === modelName)!;

    setModelSelected(newModel);
    setModelRegister(newModel);

    return newModel.name;
  };

  return (
    <div className="min-h-full overflow-y-auto flex items-center justify-center px-5 py-10">
      <Dialog.Panel className=" flex flex-col gap-6 p-7 bg-white-fixed rounded-2 max-w-[520px]">
        <Dialog.Title className="relative right-2 text-heading-7 font-500">
          Editar Anúncio
        </Dialog.Title>
        <Dialog.Description className="text-body-2 font-500">
          Informações do veículo
        </Dialog.Description>
        <form
          className="flex flex-col items-center gap-6 justify-center"
          onSubmit={handleSubmit((data): void =>
            submitForm(data, announcement.id)
          )}
        >
          <Listbox
            defaultValue={announcement.brand}
            as="div"
            className="w-full"
            {...register("brand")}
            onChange={(e) => {
              selectModels(e);
            }}
          >
            <Listbox.Label className="text-grey-1 text-body-2">
              Marca
            </Listbox.Label>
            <Listbox.Button className="py-2 w-full text-center text-body-1 border-[1.5px] border-grey-7 outline-none rounded text-grey-1 placeholder-grey-3">
              {brandSelected}
            </Listbox.Button>
            <Listbox.Options className=" py-2 text-center text-body-1 border-[1.5px] border-grey-7 outline-none rounded text-grey-1 placeholder-grey-3 flex flex-col items-center w-full  max-h-[250px] overflow-y-scroll">
              {brands.map((brand: string) => (
                <Listbox.Option
                  className="w-full text-center "
                  key={brand}
                  value={brand}
                >
                  {({ active }) => (
                    <li
                      className={`w-full h-full py-2 cursor-pointer ${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {brand}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          <Listbox
            as="div"
            className="w-full"
            {...register("model")}
            defaultValue={announcement.model}
            onChange={(e) => findOneModel(models, e)}
          >
            <Listbox.Label className="text-grey-1 text-body-2" htmlFor="">
              Modelos
            </Listbox.Label>
            <Listbox.Button
              className="py-2 w-full text-center text-body-1 border-[1.5px] border-grey-7 outline-none rounded text-grey-1 placeholder-grey-3"
              defaultValue={modelSelected?.name}
            >
              {modelSelected?.name}
            </Listbox.Button>
            <Listbox.Options className="flex flex-col items-center w-full text-center max-h-[250px] overflow-y-scroll">
              {models.map((elem: iModel) => (
                <Listbox.Option
                  className="w-full text-center "
                  key={elem.id}
                  value={elem.name}
                >
                  {({ active }) => (
                    <li
                      className={`w-full h-full py-2 cursor-pointer ${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {elem.name}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          {errors.model && (
            <span className="text-body-2 text-random-2">
              {errors.model.message}
            </span>
          )}
          <div className="flex gap-3">
            <div className="flex flex-col">
              <Input
                id="year"
                label="Ano"
                type="number"
                placeholder="2022"
                disabled={true}
                className="max-w-full"
                register={register("year")}
                value={modelSelected?.year}
              />
              {errors?.year && (
                <span className="text-body-2 text-random-2">
                  {errors.year.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <Input
                id="fuel"
                label="Combustível"
                type="text"
                placeholder="diesel"
                disabled={true}
                className="max-w-full"
                register={register("fuel")}
                value={modelSelected?.fuel}
              />
              {errors?.fuel && (
                <span className="text-body-2 text-random-2">
                  {errors.fuel.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <Input
                id="kilometers"
                label="Quilometragem"
                type="text"
                placeholder="30.000"
                register={register("kilometers", { valueAsNumber: true })}
                disabled={false}
                className="max-w-full"
                defaultValue={announcement.kilometers}
              />
              {errors.kilometers && (
                <span className="text-body-2 text-random-2">
                  {errors.kilometers.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <Input
                id="color"
                label="Cor"
                type="text"
                placeholder="Branco"
                register={register("color")}
                disabled={false}
                className="max-w-full"
                defaultValue={announcement.color}
              />
              {errors.color && (
                <span className="text-body-2 text-random-2">
                  {errors.color.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <Input
                id="price_fipe"
                label="Preço tabela FIPE"
                type="number"
                placeholder="R$ 48.000,00"
                disabled={true}
                className="max-w-full"
                value={modelSelected?.value}
                register={register("price_fipe")}
              />
              {errors?.price_fipe && (
                <span className="text-body-2 text-random-2">
                  {errors.price_fipe.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <Input
                id="price"
                label="Preço"
                type="text"
                placeholder="15000"
                register={register("price", { valueAsNumber: true })}
                disabled={false}
                defaultValue={announcement.price}
                className="max-w-full"
              />
              {errors.price && (
                <span className="text-body-2 text-random-2">
                  {errors.price.message}
                </span>
              )}
            </div>
          </div>

          <Input
            id="description"
            label="Descrição"
            type="text"
            placeholder="Lorem Ipsun is simply ..."
            register={register("description")}
            disabled={false}
            defaultValue={announcement.description}
            className="max-w-full"
          />
          {errors.description && (
            <span className="text-body-2 text-random-2">
              {errors.description.message}
            </span>
          )}

          <Input
            id="cover_image"
            label="Imagem de capa"
            type="text"
            placeholder="https://image.com"
            register={register("cover_image")}
            disabled={false}
            defaultValue={announcement.cover_image}
            className="max-w-full"
          />
          {errors.cover_image && (
            <span className="text-body-2 text-random-2">
              {errors.cover_image.message}
            </span>
          )}
          {announcement.image_gallery.map((elem, index) => (
            <React.Fragment>
              <Input
                id="image_gallery"
                key={elem.image}
                label={`${index + 1}º imagem da galeria`}
                type="text"
                placeholder="https://image.com"
                register={register(`image_gallery.${index}.image`, {
                  minLength: 1,
                })}
                disabled={false}
                className="max-w-full"
                defaultValue={elem.image}
              />
              {errors.image_gallery && (
                <span className="text-body-2 text-random-2">
                  {errors.image_gallery.message}
                </span>
              )}
            </React.Fragment>
          ))}

          {image.map((elem) => (
            <React.Fragment>
              <Input
                id="image_gallery"
                key={elem}
                label={`${
                  announcement.image_gallery.length + 1
                }º imagem da galeria`}
                type="text"
                placeholder="https://image.com"
                register={register(
                  `image_gallery.${announcement.image_gallery.length}.image`,
                  {
                    minLength: 1,
                  }
                )}
                disabled={false}
                className="max-w-full"
              />
              {errors.image_gallery && (
                <span className="text-body-2 text-random-2">
                  {errors.image_gallery.message}
                </span>
              )}
            </React.Fragment>
          ))}

          <fieldset className="flex flex-col items-center gap-4">
            <label className="text-grey-1 text-body-2 font-bold" htmlFor="">
              Status do anúncio
            </label>
            <div className="flex gap-3">
              <Button
                text="Ativo"
                type="button"
                size="medium"
                variant={activate ? "brand1" : "outline1"}
                onClick={() => setActivate((status) => !status)}
              />
              <Button
                text="Inativo"
                type="button"
                size="medium"
                variant={activate ? "outline1" : "brand1"}
                onClick={() => setActivate((status) => !status)}
              />
            </div>
          </fieldset>

          <Button
            text="Adicionar campo para imagem da galeria"
            size="medium"
            type="button"
            variant="brand1"
            onClick={() => setImage((array) => [...array, array.length])}
          />

          <div className="flex gap-3 self-end">
            <Button
              onClick={() => setOpen(false)}
              text="Cancelar"
              size="medium"
              variant="greyDisable"
            />{" "}
            <Button
              text="Editar anúncio"
              type="submit"
              size="medium"
              variant="brand1"
            />
          </div>
        </form>
      </Dialog.Panel>
    </div>
  );
};
