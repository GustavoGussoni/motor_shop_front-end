import { useContext } from "react";
import { iAnnouncementProps } from "../../Contexts/AuthContext/@types";
import { AuthContext } from "../../Contexts/AuthContext";
import { setCookie } from "nookies";

interface iCard {
  data: iAnnouncementProps;
}

const Card = ({ data }: iCard) => {
  const { getUserAnnouncement, navigate, setAnnouncementId } =
    useContext(AuthContext);
  const GetFirstLetterOfEachWord = (username: string) => {
    const words = username.split(" ");
    const firstWords = words.map((word) => word.charAt(0));
    return firstWords.join("");
  };

  const getRandomColorClass = (): string => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-teal-500",
      "bg-indigo-500",
      "bg-gray-500",
      "bg-orange-500",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const randomColorClass = getRandomColorClass();

  const handleUser = (userId: string) => {
    setCookie(null, "user_id", userId);
    navigate("/profile/user");
  };

  const handleProduct = (announcementId: string) => {
    setAnnouncementId(announcementId);
    const dataString = JSON.stringify(data);
    setCookie(null, "announcement_data", dataString);
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
      <div className="mt-2 flex flex-col mb-4 gap-[16px]">
        <h2 className="mb-2 text-grey-1">
          {data.brand} - {data.model}
        </h2>
        <p className="text-grey-2 text-ellipsis overflow-hidden whitespace-nowrap">
          {data.description ? data.description : "Sem descrição"}
        </p>
        <div
          onClick={() => handleUser(data.userId)}
          className="flex items-center gap-2 hover:cursor-pointer hover:text-"
        >
          <div
            className={`rounded-full w-8 h-8 ${randomColorClass} flex items-center justify-center`}
          >
            <p className="text-center text-white font-medium text-sm flex items-center justify-center">
              {GetFirstLetterOfEachWord(data.user.name)}
            </p>
          </div>
          <h2 className="text-grey-1 text-sm font-medium">{data.user.name}</h2>
        </div>
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
      </div>
    </li>
  );
};

export { Card };
