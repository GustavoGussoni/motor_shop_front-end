import { Dialog } from "@headlessui/react";
import { Input } from "../Form/Input";
import { Button } from "../Button";
import { useForm } from "react-hook-form";

interface iFormRegisterAnnouncement {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormRegisterAnnouncement = ({
  open,
  setOpen,
}: iFormRegisterAnnouncement) => {
  const {
    register,
    handleSubmit,
    // formState: { isValid, errors },
  } = useForm<any>({
    // mode: "onBlur",
    // resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <Dialog
      className="relative z-50"
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="min-h-full overflow-y-auto flex items-center justify-center p-4">
          <Dialog.Panel className=" flex flex-col gap-6 p-3 bg-grey-4 rounded-2">
            <Dialog.Title>Criar Anúncio</Dialog.Title>
            <Dialog.Description>Informações do veículo</Dialog.Description>
            <form
              className="flex flex-row flex-wrap items-center gap-5 justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                id="name"
                label="Marca"
                type="text"
                placeholder="Mercedes Benz"
                register={register("name_car")}
                disabled={false}
                className="w-full"
              />
              <Input
                id="model"
                label="Modelo"
                type="text"
                placeholder="A 200 CGI ADVANCE SEDAN"
                register={register("brand")}
                disabled={false}
              />
              <Input
                id="year"
                label="Ano"
                type="text"
                placeholder="2018"
                register={register("year")}
                disabled={false}
              />
              <Input
                id="kilometers"
                label="Quilometragem"
                type="text"
                placeholder="30.000"
                register={register("kilometers")}
                disabled={false}
              />
              <Input
                id="color"
                label="Cor"
                type="text"
                placeholder="Branco"
                register={register("color")}
                disabled={false}
              />
              <Input
                id="price_fipe"
                label="Preço tabela FIPE"
                type="text"
                placeholder="R$ 48.000,00"
                register={register("price_fipe")}
                disabled={false}
              />
              <Input
                id="price"
                label="Preço"
                type="text"
                placeholder="Ex: Nome Sobrenome"
                register={register("price")}
                disabled={false}
              />
              <Input
                id="description"
                label="Descrição"
                type="text"
                placeholder="Lorem Ipsun is simply ..."
                register={register("description")}
                disabled={false}
              />
              <Input
                id="cover_img"
                label="Imagem de capa"
                type="text"
                placeholder="https://image.com"
                register={register("cover_img")}
                disabled={false}
              />
              <Input
                id="image_gallery"
                label="1º imagem da galeria"
                type="text"
                placeholder="https://image.com"
                register={register("image_gallery")}
                disabled={false}
              />
              <Input
                id="image_gallery"
                label="2º imagem da galeria"
                type="text"
                placeholder="https://image.com"
                register={register("image_gallery")}
                disabled={false}
              />
              <Button
                text="Adicionar campo para imagem da galeria"
                size="medium"
                variant="brand1"
              ></Button>
              <Button
                onClick={() => setOpen(false)}
                text="Cancelar"
                size="medium"
                variant="brand4"
              ></Button>
              <Button
                onClick={() => handleSubmit(onSubmit)}
                text="Criar anúncio"
                size="medium"
                variant="brand4"
              ></Button>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
