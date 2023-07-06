type iCarImagesProps = {
  data: { image: string; id: string };
  setViewImage: React.Dispatch<React.SetStateAction<string>>;
  setOpenViewImage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CarImages = ({
  data,
  setViewImage,
  setOpenViewImage,
}: iCarImagesProps) => {
  return (
    <>
      <div className="bg-gray-100 flex items-center w-full min-w-[90px] max-w-[108px] max-h-[108px]">
        <img
          src={data.image}
          alt="Imagem carro"
          className="object-cover rounded-1"
          onClick={() => {
            setViewImage(data.image);
            setOpenViewImage(true);
            console.log("clicou");
          }}
        />
      </div>
    </>
  );
};
