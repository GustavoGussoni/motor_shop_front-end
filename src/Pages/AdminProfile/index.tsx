import { Header } from "../../Components/Header";
import { HeadingText } from "../../Style/HeadingText";
import { HeadingTextBody } from "../../Style/HeadingBodyText";
import { Footer } from "../../Components/Footer";
import { Button } from "../../Components/Button";
import { useState } from "react";
import { FormRegisterAnnouncement } from "../../Components/FormRegisterAnnouncement";

export const AdminProfile = () => {
  const userTest = {
    name: "Joselito",
    lastName: "Michael",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    profileImage: null,
  };

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-gray-100 max-h-full">
      <Header />
      <div className="relative z-[1] bg-brand-1 h-[17rem]" />
      <div className="bg-gray-100 absolute top-[78px] h-[100vh] w-full">
        <main>
          <div className="bg-white z-[2] flex flex-col items-start gap-8 w-full py-[40px] px-[28px] sm:px-[44px] sm:py-[36px] h-auto sm:flex sm:justify-center">
            <div className="w-[104px] h-[104px] flex items-center justify-center rounded-full bg-brand-1 text-3xl text-white-fixed">
              {userTest.profileImage
                ? userTest.profileImage
                : userTest.name[0].toUpperCase() +
                  userTest.lastName[0].toUpperCase()}
            </div>
            <div>
              <HeadingText tag="heading-6-600">
                {userTest.name + " " + userTest.lastName}
              </HeadingText>
            </div>

            <HeadingTextBody
              tag="body-1-400"
              className="w-[100%] text-start text-grey-2 sm:max-w-[352px]"
            >
              {userTest.description}
            </HeadingTextBody>
            <Button
              onClick={() => setOpen(true)}
              text="Criar anúncio"
              size="big"
              variant="brand1"
            ></Button>
          </div>
        </main>
        <Footer />
      </div>
      <FormRegisterAnnouncement open={open} setOpen={setOpen} />
    </div>
  );
};
