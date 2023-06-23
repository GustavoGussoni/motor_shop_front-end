import { useContext } from "react";
import { iAnnouncementProps } from "../../Contexts/AuthContext/@types";
import { Button } from "../Button";
import { AuthContext } from "../../Contexts/AuthContext";

interface iCard {
  data: iAnnouncementProps;
}

const CardAdmin = ({ data }: iCard) => {
  const { setAnnouncementId, navigate } = useContext(AuthContext);

  const handleProduct = async (announcementId: string) => {
    await setAnnouncementId(announcementId);
    navigate("/product");
  };

  return (
    <li className="pt-2 px-2 sm:px-2 sm:py-2 list-none min-w-[312px] max-w-[300px] ml-1">
      <div className="relative w-[296px] h-[160px]">
        <img
          onClick={() => handleProduct(data.id)}
          className="border-2 hover:cursor-pointer hover:border-brand-1 w-[296px] h-[160px] object-cover"
          src={data.cover_image}
          alt=""
        />
        {data.is_activate ? (
          <div className="pl-2 pr-2 absolute top-4 left-4 bg-brand-1 text-white-fixed">
            <p>Ativo</p>
          </div>
        ) : (
          <div className="pl-2 pr-2 absolute top-4 left-4 bg-red-600 text-white-fixed">
            <p>Inativo</p>
          </div>
        )}
      </div>
      <div className="mt-2 flex flex-col gap-[16px] mb-4">
        <h2 className="mb-2 font-600 text-heading-7 text-grey-1">
          {data.brand} - {data.model}
        </h2>
        <p className="text-grey-2  text-ellipsis overflow-hidden whitespace-nowrap">
          {data.description ? data.description : "Sem descrição"}
        </p>

        <div className="flex justify-between">
          <div className="flex gap-[16px]">
            <div className="pt-2 pb-2 pl-2 pr-2 rounded-2 text-brand-1 bg-brand-4 font-500 flex items-center justify-center">
              <span>{data.kilometers}KM</span>
            </div>
            <div className="pt-2 pb-2 pl-2 pr-2 rounded-2 text-brand-1 bg-brand-4 font-500 flex items-center justify-center">
              <span>{data.year}</span>
            </div>
          </div>

          <div className="pt-2 pb-2 pl-2 pr-2 rounded-2 font-500 flex items-center justify-center">
            <span>R${data.price}</span>
          </div>
        </div>
        <div className="flex gap-[16px]">
          <Button variant="outline1" text="editar" size="medium" />
          <Button variant="outline1" text="Ver detalhes" size="medium" />
        </div>
      </div>
    </li>
  );
};

export { CardAdmin };
