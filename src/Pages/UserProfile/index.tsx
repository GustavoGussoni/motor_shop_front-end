import { Header } from "../../Components/Header";
import { HeadingText } from "../../Style/HeadingText";
import { HeadingTextBody } from "../../Style/HeadingBodyText";
import { Footer } from "../../Components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Card } from "../../Components/Card";
import { parseCookies } from "nookies";

export const UserProfile = () => {
  const { userAnnouncements, getUserAnnouncement } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        scrollTo(0, 0);
        // getUserData();
        const cookies = parseCookies();
        const { user_id } = cookies;

        await getUserAnnouncement(user_id);

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
  if (isLoading || !userAnnouncements) {
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
        <main className="bg-gray-100">
          <div className="bg-white z-[2] flex flex-col items-start gap-8 w-full py-[40px] px-[28px] sm:px-[44px] sm:py-[36px] h-auto sm:flex sm:justify-center">
            <div className="w-[104px] h-[104px] flex items-center justify-center rounded-full bg-brand-1 text-3xl text-white-fixed">
              {GetFirstLetterOfEachWord(userAnnouncements[0].user.name)}
            </div>
            <div className="flex gap-3">
              <HeadingText tag="heading-6-600">
                {userAnnouncements[0].user.name}
              </HeadingText>
              {userAnnouncements[0].user.is_advertiser ? (
                <p className="flex items-center h-[32px] bg-brand-4 px-2 py-1 text-brand-1 text-body-2 rounded font-medium">
                  Anunciante
                </p>
              ) : null}
            </div>

            <HeadingTextBody
              tag="body-1-400"
              className="w-[100%] text-start text-grey-2 sm:max-w-[352px]"
            >
              {userAnnouncements[0].user.description}
            </HeadingTextBody>
          </div>
        </main>
        <div className="flex bg-gray-100 flex-col sm:justify-between sm:w-full">
          <div className="flex px-14 items-center justify-between w-full">
            <h1 className="text-heading-5 font-600 font-sans leading-8">
              Anúncios
            </h1>
          </div>
          <main>
            <ul className="flex flex-nowrap flex-row justify-start gap-[46px] overflow-x-auto sm:w-full sm:gap-2 sm:max-w-full sm:h-full sm:justify-center sm:flex-wrap sm:overflow-x-hidden">
              {userAnnouncements ? (
                userAnnouncements.map((an) => {
                  return <Card key={an.id} data={an} />;
                })
              ) : (
                <p>Sem anúncios cadastrados</p>
              )}
            </ul>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
};
