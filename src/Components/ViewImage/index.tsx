interface iViewImage {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  viewImage: string;
}

export const ViewImage = ({ setOpen, viewImage }: iViewImage) => {
  return (
    <div className="w-full max-w-[520px] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all m-auto mt-[100px] flex flex-col gap-[20px]">
      <p onClick={() => setOpen(false)}>X</p>
      <h2 className="relative right-2 text-heading-7 font-500">
        Criar Anúncio
      </h2>
      <figure className="bg-gray-100 flex items-center w-full min-w-[90px] max-w-[108px] max-h-[108px]">
        <img
          src={viewImage}
          alt="Imagem carro"
          className="object-cover rounded-1"
        />
      </figure>
    </div>
  );
};
