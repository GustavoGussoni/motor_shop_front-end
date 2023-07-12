import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Button } from "../Button";
import { parseCookies } from "nookies";
import { AuthContext } from "../../Contexts/AuthContext";
import jwtDecode from "jwt-decode";

interface iCommentsCardProps {
  id: string;
  comments: string;
  created_at: Date;
  user: {
    name: string;
  };
}

export const CardComents = ({
  comments,
  user,
  created_at,
  id,
}: iCommentsCardProps) => {
  const { deleteComment, editComment } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [comment, setComment] = useState("");
  const cookies = parseCookies();
  const { user_token } = cookies;
  const decoded: any = jwtDecode(user_token);
  console.log(user);

  const handleClick = () => {
    if (!editing) {
      setEditing(true);
    } else {
      setEditing(false);
    }
  };

  const handleNewComment = async (id: string, data: string) => {
    await editComment(id, data);
    setEditing(false);
  };

  const delComment = () => {
    deleteComment(id);
    window.location.reload();
  };

  const GetFirstLetterOfEachWord = (username: string) => {
    const words = username.split(" ");
    const firstWords = words.map((word) => word.charAt(0));
    return firstWords.join("");
  };

  const calculateElapsedTime = (publicationDate: Date): string => {
    const currentDate = new Date();
    const differenceInMilliseconds =
      currentDate.getTime() - publicationDate.getTime();

    const seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} ano${years > 1 ? "s" : ""} atrás`;
    } else if (months > 0) {
      return `${months} mês${months > 1 ? "es" : ""} atrás`;
    } else if (days > 0) {
      return `${days} dia${days > 1 ? "s" : ""} atrás`;
    } else if (hours > 0) {
      return `${hours} hora${hours > 1 ? "s" : ""} atrás`;
    } else if (minutes > 0) {
      return `${minutes} minuto${minutes > 1 ? "s" : ""} atrás`;
    } else {
      return `${seconds} segundo${seconds > 1 ? "s" : ""} atrás`;
    }
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

  return (
    <li className="flex gap-2 flex-col">
      <div className="flex items-center gap-3">
        <div
          className={`rounded-full w-8 h-8 ${randomColorClass} flex items-center justify-center`}
        >
          <p className="text-center text-white font-medium text-sm flex items-center justify-center">
            {GetFirstLetterOfEachWord(user.name)}
          </p>
        </div>
        <h2 className="text-grey-1 text-sm font-medium">{user.name}</h2>
        <span className="flex justify-center items-center gap-2 font-normal text-grey-3 text-xs">
          <div className="rounded-full w-1 h-1 text-center font-normal bg-grey-3"></div>
          {calculateElapsedTime(new Date(created_at))}
        </span>
        {decoded.sub && user.name === decoded.name ? (
          <div className="flex gap-5">
            <PencilIcon
              className="w-5 h-5 cursor-pointer"
              onClick={handleClick}
            />
            <TrashIcon
              className="w-5 h-5 cursor-pointer"
              onClick={delComment}
            />
          </div>
        ) : null}
      </div>
      {editing ? (
        <textarea
          className="border-2 border-brand4 p-2 rounded-2"
          defaultValue={comments}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      ) : (
        <p className="font-normal text-grey-2 text-sm">{comments}</p>
      )}
      {editing ? (
        <div className="flex gap-3">
          <Button
            text="Salvar alterações"
            size="big"
            variant="brand4"
            onClick={() => handleNewComment(id, comment)}
          ></Button>
          <Button
            text="Cancelar"
            size="big"
            variant="greyDisable"
            onClick={handleClick}
          ></Button>
        </div>
      ) : null}
    </li>
  );
};
