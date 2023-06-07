import { ChevronUpIcon } from "@heroicons/react/24/outline";
import imgLogo from "../../Assets/Motors shop (1).png";
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="bg-grey-0 h-80 w-full flex items-center flex-col gap-14 py-11 px-14 sm:flex-row sm:justify-between sm:h-36 duration-75">
      <img className="py-4 fill-white" src={imgLogo}></img>
      <span className="text-white-fixed font-400 text-body-2 text-center">
        © 2023 - Todos os direitos reservados.
      </span>
      <div className="bg-grey-1 w-11 h-11 flex items-center justify-center">
        <ChevronUpIcon
          className="w-5 h-5 text-white-fixed cursor-pointer"
          onClick={scrollToTop}
        />
      </div>
    </section>
  );
};
