import { CardComents } from '../CardComents';
import { FormComents } from '../FormComents';

const user = {
  username: 'Adriano Souza',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, illo deserunt? Sapiente dolores voluptatibus delectus aperiam. Quibusdam dignissimos fugit ab ratione explicabo tenetur, iusto adipisci eum hic. Repellat, beatae mollitia.',
  createdAt: new Date(),
};

export const Coments = () => {
  return (
    <section className="bg-grey-10 container w-screen h-screen rounded gap-6 py-9 px-7 flex flex-col max-w-screen-md">
      <h2 className="text-xl">Comentários</h2>
      <ul className="flex flex-col gap-7">
        <CardComents user={user} />
        <CardComents user={user} />
        <CardComents user={user} />
      </ul>
      <FormComents />
    </section>
  );
};
