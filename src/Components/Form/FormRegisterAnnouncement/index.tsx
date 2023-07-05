import { Dialog } from "@headlessui/react";
import { Input } from "../Input";
import { Button } from "../../Button";
import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import { iFormAnnouncement } from "./@types";
import { AnnouncementSchema } from "./annoucement.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../Contexts/UserContext";
import { iModel } from "../../../Contexts/UserContext/@types";

interface iFormRegisterAnnouncement {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormRegisterAnnouncement = ({
  setOpen,
}: iFormRegisterAnnouncement) => {
  const { getCars, models, getModels, brands, postAnnouncement } =
    useContext(UserContext);

  const [image, setImage] = useState<number[]>([0, 1]);
  const [modelSelected, setModelSelected] = useState<iModel | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { isValid, errors },
  } = useForm<iFormAnnouncement>({
    mode: "onBlur",
    resolver: zodResolver(AnnouncementSchema),
  });

  useEffect(() => {
    const init = async () => {
      await getCars();
    };

    init();
  }, []);

  const setModel = (model: iModel) => {
    setValue("fuel", model.fuel);
    setValue("year", model.year);
    setValue("price_fipe", model.value);
  };

  const submitForm = (data: iFormAnnouncement) => {
    const imageGallery =
      getValues("image_gallery")?.filter((elem) => elem.image !== "") || [];

    setValue("image_gallery", imageGallery);

    console.log(data);

    postAnnouncement(data).then((status) =>
      status === 201 ? setOpen(false) : null
    );
  };

  const selectModels = async (brand: string) => await getModels(brand);

  const findOneModel = (modelName: string) => {
    const newModel = models.find((elem) => elem.name === modelName)!;

    setModelSelected(newModel);
    setModel(newModel);
  };

  return (
    <div className="min-h-full overflow-y-auto flex items-center justify-center px-5 py-10">
      <Dialog.Panel className=" flex flex-col gap-6 p-7 bg-white-fixed rounded-2 max-w-[520px]">
        <Dialog.Title className="relative right-2 text-heading-7 font-500">
          Criar Anúncio
        </Dialog.Title>
        <Dialog.Description className="text-body-2 font-500">
          Informações do veículo
        </Dialog.Description>
        <form
          className="flex flex-col items-center gap-6 justify-center"
          onSubmit={handleSubmit(submitForm)}
        >
          <fieldset className="w-full flex flex-col gap-y-2.5">
            <label className="text-grey-1 text-body-2" htmlFor="">
              Marca
            </label>
            <select
              id=""
              {...register("brand")}
              onChange={(e) => {
                setModelSelected({
                  id: "",
                  name: "",
                  brand: "",
                  year: "",
                  fuel: 0,
                  value: 0,
                });
                selectModels(e.target.value);
              }}
            >
              {brands.map((elem: string) => (
                <option value={elem}>{elem}</option>
              ))}
            </select>
          </fieldset>
          <fieldset className="w-full flex flex-col gap-y-2.5">
            <label className="text-grey-1 text-body-2" htmlFor="">
              Modelos
            </label>
            <select
              {...register("model")}
              id=""
              onChange={(e) => findOneModel(e.target.value)}
            >
              {models.map((elem: iModel) => (
                <option key={elem.id} value={elem.name}>
                  {elem.name}
                </option>
              ))}
            </select>
            {errors.model && (
              <span className="text-body-2 text-random-2">
                {errors.model.message}
              </span>
            )}
          </fieldset>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <Input
                id="year"
                label="Ano"
                type="number"
                placeholder="2022"
                disabled={false}
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
                disabled={false}
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
                disabled={false}
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
            className="max-w-full"
          />
          {errors.cover_image && (
            <span className="text-body-2 text-random-2">
              {errors.cover_image.message}
            </span>
          )}

          {image.map((elem) => (
            <React.Fragment>
              <Input
                id="image_gallery"
                key={elem}
                label={`${elem + 1}º imagem da galeria`}
                type="text"
                placeholder="https://image.com"
                register={register(`image_gallery.${elem}.image`, {
                  minLength: 1,
                })}
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

          <Button
            text="Adicionar campo para imagem da galeria"
            size="medium"
            variant="brand1"
            onClick={() => setImage((array) => [...array, array.length])}
          ></Button>
          <div className="flex gap-3 self-end">
            <Button
              onClick={() => setOpen(false)}
              text="Cancelar"
              size="medium"
              variant="greyDisable"
            ></Button>
            <Button
              text="Criar anúncio"
              type="submit"
              size="medium"
              variant={isValid ? "brand1" : "brandDisable"}
            ></Button>
          </div>
        </form>
      </Dialog.Panel>
    </div>
  );
};
