import img from "../../../Assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";

export const CarImages = () => {
  return (
    <aside className="bg-white rounded-2 flex flex-col items-center gap-8 w-full py-[40px] px-[28px] sm:py-[36px] h-auto sm:flex sm:items-center sm:justify-center">
      <h1 className="self-start text-heading-6">Fotos</h1>
      <div className="flex flex-wrap items-center gap-y-[25px] justify-between">
        <div className="bg-gray-100 flex items-center w-full min-w-[90px] h-[90px] max-w-[108px] max-h-[108px]">
          <img src={img} alt="Imagem carro" className="object-cover" />
        </div>
        <div className="bg-gray-100 flex items-center w-full min-w-[90px] h-[90px] max-w-[108px] max-h-[108px]">
          <img src={img} alt="Imagem carro" className="object-cover" />
        </div>
        <div className="bg-gray-100 flex items-center w-full min-w-[90px] h-[90px] max-w-[108px] max-h-[108px]">
          <img src={img} alt="Imagem carro" className="object-cover" />
        </div>
        <div className="bg-gray-100 flex items-center w-full min-w-[90px] h-[90px] max-w-[108px] max-h-[108px]">
          <img src={img} alt="Imagem carro" className="object-cover" />
        </div>
        <div className="bg-gray-100 flex items-center w-full min-w-[90px] h-[90px] max-w-[108px] max-h-[108px]">
          <img src={img} alt="Imagem carro" className="object-cover" />
        </div>
        <div className="bg-gray-100 flex items-center w-full min-w-[90px] h-[90px] max-w-[108px] max-h-[108px]">
          <img src={img} alt="Imagem carro" className="object-cover" />
        </div>
      </div>
    </aside>
  );
};
