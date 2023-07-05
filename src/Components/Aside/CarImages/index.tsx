type iCarImagesProps = {
  data: { image: string; id: string };
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
};

export const CarImages = ({ data, setOpen, setImage }: iCarImagesProps) => {
  return (
    <>
      <div
        onClick={() => {
          setImage(data.image);
          setOpen(true);
        }}
        className="bg-gray-100 flex items-center w-full min-w-[90px] max-w-[108px] max-h-[108px]"
      >
        <img
          src={data.image}
          alt="Imagem carro"
          className="object-cover rounded-1"
        />
      </div>
    </>
  );
};
