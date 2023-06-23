type iCarImagesProps = {
  data: { image: string; id: string };
};

export const CarImages = ({ data }: iCarImagesProps) => {
  console.log(data);
  return (
    <>
      <div className="bg-gray-100 flex items-center w-full min-w-[90px] max-w-[108px] max-h-[108px]">
        <img
          src={data.image}
          alt="Imagem carro"
          className="object-cover rounded-1"
        />
      </div>
    </>
  );
};
