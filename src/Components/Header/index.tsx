import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="flex px-14 items-center justify-between h-80px w-full">
      <h1 className="py-4">Motors shop</h1>
      <div className="flex pl-16 py-4 border-l border-grey-6 gap-12">
        <button className="bg-none text-grey-2">Fazer login</button>
        <Button variant="outline2" size="medium" text="Cadastrar"></Button>
      </div>
    </div>
  );
};
