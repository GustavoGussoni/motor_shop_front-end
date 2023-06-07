import { Button } from "../Button";
import img from "../../Assets/embargo_23_01_bst_15_july_2020_911_turbo_rear_three_quarter-removebg.png";
import { Menu, Transition } from "@headlessui/react";
import imgLogo from "../../Assets/Motors shop.png";

export const Header = () => {
  return (
    <header>
      <div className="flex px-14 items-center justify-between w-full">
        <img className="py-4" src={imgLogo}></img>

        <div className="pl-16 py-4 border-l border-grey-6 gap-12 hidden sm:flex duration-150">
          <button className="bg-none text-grey-2">Fazer login</button>
          <Button variant="outline2" size="medium" text="Cadastrar"></Button>
        </div>
        <div className="flex sm:hidden duration-150">
          <Menu>
            <Menu.Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-50 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="origin-bottom-right flex flex-col absolute top-5 right-5 gap-2 bg-transparent rounded-md">
                <Menu.Item>
                  <Button
                    variant="outline2"
                    size="medium"
                    text="Login"
                  ></Button>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    variant="outline2"
                    size="medium"
                    text="Cadastrar"
                  ></Button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="bg-gradient-to-b from-brand-4 to-grey-0 to-90% h-1/3">
        <img src={img} alt="Imagem carro" className="bg-contain" />
      </div>
    </header>
  );
};
