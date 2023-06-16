import { Header } from "../../Components/Header";
import { HeadingText } from "../../Style/HeadingText";
import { HeadingTextBody } from "../../Style/HeadingBodyText";
import { Footer } from "../../Components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export const UserProfile = () => {
  const { getUserData, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        await getUserData();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        return error;
      }
    };
    getUser();
  }, []);

  const GetFirstLetterOfEachWord = (username: string) => {
    const words = username.split(" ");
    const firstWords = words.map((word) => word.charAt(0));
    return firstWords.join("");
  };
  if (isLoading) {
    return (
      <div className="bg-gray-100 max-h-full">
        <Header />
        <div className="relative z-[1] bg-brand-1 h-[17rem]" />
        <div className="bg-gray-100 absolute top-[78px] h-[100vh] w-full">
          <main>
            <HeadingText className="z-[2] text-white" tag="heading-6-600">
              Carregando...
            </HeadingText>
          </main>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 max-h-full">
      <Header />
      <div className="relative z-[1] bg-brand-1 h-[17rem]" />
      <div className="bg-gray-100 absolute top-[78px] h-[100vh] w-full">
        <main>
          <div className="bg-white z-[2] flex flex-col items-start gap-8 w-full py-[40px] px-[28px] sm:px-[44px] sm:py-[36px] h-auto sm:flex sm:justify-center">
            <div className="w-[104px] h-[104px] flex items-center justify-center rounded-full bg-brand-1 text-3xl text-white-fixed">
              {GetFirstLetterOfEachWord(user[0]?.name)}
            </div>
            <div>
              <HeadingText tag="heading-6-600">{user[0]?.name}</HeadingText>
            </div>

            <HeadingTextBody
              tag="body-1-400"
              className="w-[100%] text-start text-grey-2 sm:max-w-[352px]"
            >
              {user[0]?.description}
            </HeadingTextBody>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
