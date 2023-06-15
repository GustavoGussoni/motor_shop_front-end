import { CardComents } from "../CardComents";
import { FormComents } from "../Form/FormComents";

const user = {
  username: "Adriano Souza",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, illo deserunt? Sapiente dolores voluptatibus delectus aperiam. Quibusdam dignissimos fugit ab ratione explicabo tenetur, iusto adipisci eum hic. Repellat, beatae mollitia.",
  createdAt: new Date(),
};

export const Coments = () => {
  return (
    <section className="bg-transparent w-full gap-6 pr-0 pl-0 px-9 flex mb-5 flex-col">
      <div className="flex flex-col gap-6  rounded-2 bg-grey-10 px-7 py-9 w-[100%]">
        <h2 className="text-xl">Comentários</h2>
        <ul className="flex flex-col gap-7">
          <CardComents user={user} />
          <CardComents user={user} />
          <CardComents user={user} />
        </ul>
        <FormComents />
      </div>
    </section>
  );
};
