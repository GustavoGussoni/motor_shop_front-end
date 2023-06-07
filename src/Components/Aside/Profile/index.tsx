import { HeadingTextBody } from "../../../Style/HeadingBodyText";
import { HeadingText } from "../../../Style/HeadingText";
import { Button } from "../../Button";

export const AsideProfile = () => {
  const userTest = {
    name: "Joselito",
    lastName: "Michael",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    profileImage: null,
  };
  return (
    <aside className="flex flex-col items-center gap-8 w-full py-[40px] px-[28px] sm:px-[44px] sm:py-[36px] max-w-[351px] h-[398px] sm:max-w-[440px] sm:h-[426px] sm:flex sm:items-center sm:justify-center">
      <div className="w-[104px] h-[104px] flex items-center justify-center rounded-full bg-brand-1 text-3xl text-white-fixed">
        {userTest.profileImage
          ? userTest.profileImage
          : userTest.name[0].toUpperCase() + userTest.lastName[0].toUpperCase()}
      </div>
      <HeadingText tag="heading-6-600">
        {userTest.name + " " + userTest.lastName}
      </HeadingText>
      <HeadingTextBody
        tag="body-1-400"
        className="w-[295px] text-center text-grey-2 sm:max-w-[352px]"
      >
        {userTest.description}
      </HeadingTextBody>
      <Button variant="grey1" size="medium" text="Ver todos anuncios" />
    </aside>
  );
};
