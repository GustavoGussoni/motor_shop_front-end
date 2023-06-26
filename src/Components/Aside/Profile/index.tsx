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
    <aside className="bg-white flex flex-col items-center gap-8 w-full py-[25px] rounded-2 p-[25px]  h-auto sm:flex sm:items-center sm:justify-center">
      <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-brand-1 text-3xl text-white-fixed">
        {userTest.profileImage
          ? userTest.profileImage
          : userTest.name[0].toUpperCase() + userTest.lastName[0].toUpperCase()}
      </div>
      <HeadingText tag="heading-6-600">
        {userTest.name + " " + userTest.lastName}
      </HeadingText>
      <HeadingTextBody
        tag="body-1-400"
        className="w-[100%] text-ellipsis overflow-hidden whitespace-nowrap max-h-[85px] text-center text-grey-2 sm:max-w-[352px]"
      >
        {userTest.description}
      </HeadingTextBody>
      <Button variant="grey1" size="medium" text="Ver todos anuncios" />
    </aside>
  );
};
