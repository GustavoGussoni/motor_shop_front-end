type iCarImagesProps = {
  data: { image: string; id: string };
};

export const CarImages = ({ data }: iCarImagesProps) => {
  return (
    <>
      <div className="bg-gray-100 flex items-center w-full min-w-[90px] max-w-[108px] h-full min-h-[108px] max-h-[108px]">
        <img
          // src={data.image}
          // alt="Imagem carro"
          className="min-h-[inherit] min-w-full img-cars-product rounded-1"
          style={{ backgroundImage: `url(${data.image})` }}
        />
      </div>
    </>
  );
};
