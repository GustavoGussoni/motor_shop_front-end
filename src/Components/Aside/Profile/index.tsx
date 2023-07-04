import { useContext } from "react";
import { HeadingTextBody } from "../../../Style/HeadingBodyText";
import { HeadingText } from "../../../Style/HeadingText";
import { Button } from "../../Button";
import { AuthContext } from "../../../Contexts/AuthContext";

type iAsideProfileProps = {
  data:
    | { name: string; description: string; is_advertiser: boolean }
    | undefined;
  userId: string | undefined;
};

export const AsideProfile = ({ data, userId }: iAsideProfileProps) => {
  const GetFirstLetterOfEachWord = (username: string) => {
    const words = username.split(" ");
    const firstWords = words.map((word) => word.charAt(0));
    return firstWords.join("");
  };

  const { getUserAnnouncement, navigate } = useContext(AuthContext);

  const handleUser = async (user_id: string | undefined) => {
    await getUserAnnouncement(user_id);
    // console.log(userId);

    navigate("/profile/user");
  };

  return (
    <aside className="bg-white flex flex-col items-center gap-8 w-full py-[25px] rounded-2 p-[25px]  h-auto sm:flex sm:items-center sm:justify-center">
      <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-brand-1 text-3xl text-white-fixed">
        {GetFirstLetterOfEachWord(data?.name || "Carregando")}
      </div>
      <HeadingText tag="heading-6-600">
        {data?.name || "Carregando"}
      </HeadingText>
      <HeadingTextBody
        tag="body-1-400"
        className="w-[100%] text-ellipsis overflow-hidden whitespace-nowrap max-h-[85px] text-center text-grey-2 sm:max-w-[352px]"
      >
        {data?.description || "Carregando"}
      </HeadingTextBody>
      <Button
        onClick={() => handleUser(userId)}
        variant="grey1"
        size="medium"
        text="Ver todos anuncios"
      />
    </aside>
  );
};
