import { Button } from "../Button";
import { Menu, Transition } from "@headlessui/react";
import imgLogo from "../../Assets/Motors shop.png";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { EditAddress } from "../Form/FormEditAddress";
import { parseCookies } from "nookies";
import { Modal } from "../Modals";

export const Header = () => {
  const { navigate, user, userLogout, getUserData, isOpen, setIsOpen } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const cookies = parseCookies();
  const [openEditAddress, setOpenEditAddres] = useState(false);
  const { user_token } = cookies;

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

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("register");
  };
  const handleHome = () => {
    navigate("");
  };

  const handleProfileAdmin = () => {
    navigate("/profile/admin");
  };

  const GetFirstLetterOfEachWord = (username: string) => {
    const words = username.split(" ");
    const firstWords = words.map((word) => word.charAt(0));
    return firstWords.join("");
  };
  const getRandomColorClass = (): string => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-teal-500",
      "bg-indigo-500",
      "bg-gray-500",
      "bg-orange-500",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const randomColorClass = getRandomColorClass();
  return (
    <header className="bg-white-fixed">
      <div className="flex px-14 items-center justify-between w-full">
        <img
          onClick={() => handleHome()}
          className="py-4 hover:cursor-pointer"
          src={imgLogo}
        ></img>
        <div className="pl-16 py-4 border-l z-[3] border-grey-6 gap-12 hidden sm:flex duration-150">
          {user_token && user ? (
            <>
              {isOpen && (
                <Modal>
                  <EditAddress setOpenEdit={setOpenEditAddres} />
                </Modal>
              )}
              <div className="flex items-center gap-3">
                <Menu>
                  <Menu.Button>
                    <div
                      className={`rounded-full w-8 h-8 ${randomColorClass} flex items-center justify-center`}
                    >
                      <p className="text-center text-white font-medium text-sm flex items-center justify-center">
                        {GetFirstLetterOfEachWord(user.name)}
                      </p>
                    </div>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-50 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items className="origin-bottom-right flex absolute top-3 right-[-100px] gap-1 bg-transparent rounded-md">
                        {
                          <>
                            <Menu.Item>
                              <Button
                                onClick={() => handleProfileAdmin()}
                                variant="outline2"
                                size="medium"
                                text="Perfil"
                              ></Button>
                            </Menu.Item>
                            <Button
                              onClick={() => setIsOpen(true)}
                              variant="outline2"
                              size="medium"
                              text="Endereço"
                            ></Button>
                            <Menu.Item>
                              <Button
                                onClick={() => userLogout()}
                                variant="outline2"
                                size="medium"
                                text="Sair"
                              ></Button>
                            </Menu.Item>
                          </>
                        }
                      </Menu.Items>
                    </Transition>
                  </Menu.Button>
                </Menu>
                <h2 className="text-grey-1 text-sm font-medium">{user.name}</h2>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => handleLogin()}
                className="bg-none text-grey-2 hover:text-brand-1"
              >
                Fazer login
              </button>
              <Button
                onClick={() => handleRegister()}
                variant="outline2"
                size="medium"
                text="Cadastrar"
              ></Button>
            </>
          )}
        </div>
        <div className="flex z-[3] sm:hidden duration-150">
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
              <Menu.Items className="origin-bottom-right flex flex-col absolute top-6 right-5 gap-2 bg-transparent rounded-md">
                {user_token && user ? (
                  <>
                    <Menu.Item>
                      <Button
                        onClick={() => setIsOpen(true)}
                        variant="outline2"
                        size="medium"
                        text="Endereço"
                      ></Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button
                        onClick={() => handleProfileAdmin()}
                        variant="outline2"
                        size="medium"
                        text="Perfil"
                      ></Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button
                        onClick={() => userLogout()}
                        variant="outline2"
                        size="medium"
                        text="Sair"
                      ></Button>
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item>
                      <Button
                        onClick={() => handleLogin()}
                        variant="outline2"
                        size="medium"
                        text="Login"
                      ></Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button
                        onClick={() => handleRegister()}
                        variant="outline2"
                        size="medium"
                        text="Cadastrar"
                      ></Button>
                    </Menu.Item>
                  </>
                )}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};
