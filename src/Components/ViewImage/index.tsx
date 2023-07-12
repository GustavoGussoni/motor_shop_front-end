interface iViewImage {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  viewImage: string;
}

export const ViewImage = ({ setOpen, viewImage }: iViewImage) => {
  return (
    <div className="relative max-w-[300px] md:max-w-[500px] max-h-[350px] md:max-h-[550px] transform rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all m-auto mt-[100px] flex flex-col gap-6   ">
      <p
        className="absolute top-6 right-6 w-4 h-4 cursor-pointer text-grey-3"
        onClick={() => setOpen(false)}
      >
        X
      </p>
      <h2 className="relative right-2 text-heading-7 font-500">
        Imagem do veículo
      </h2>
      <figure className="bg-gray-100 flex items-center w-full">
        <img
          src={viewImage}
          alt="Imagem"
          className="object-cover rounded-1 self-center"

        />
      </figure>
    </div>
  );
};
