type iDescriptionProduct = {
  description: string | undefined;
};

export const DescriptionProduct = ({ description }: iDescriptionProduct) => {
  return (
    <div className="m-auto sm:m-auto md:m-auto w-[100%] h-[auto] md:w-[100%] bg-grey-10 rounded-2 ">
      <div className=" h-auto w-full p-[28px]">
        <h2 className="text-grey-1 font-600">Descrição</h2>
        <div className="w=[295px] md:w-[100%] h-auto mt-[32px]">
          <p className="text-grey-2 font-400">{description}</p>
        </div>
      </div>
    </div>
  );
};
