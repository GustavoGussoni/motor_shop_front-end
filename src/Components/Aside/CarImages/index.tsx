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
      <div className="bg-gray-100 flex items-center w-full min-w-[90px] max-w-[108px] h-full min-h-[108px] max-h-[108px]">
        <img
          src={data.image}
          alt="Imagem carro"
          onClick={() => {
            setViewImage(data.image);
            setOpenViewImage(true);
          }}
          className="min-h-[inherit] min-w-full img-cars-product rounded-1 object-cover cursor-pointer"
          style={{ backgroundImage: `url(${data.image})` }}
        />
      </div>
    </>
  );
};
