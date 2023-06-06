import { ChevronUpIcon } from '@heroicons/react/24/outline';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section className="bg-grey-0 h-80 w-full flex items-center flex-col gap-14 py-11 px-14 sm:flex-row sm:justify-between sm:h-36 duration-75">
      <p className="text-white-fixed">Motors shop</p>
      <span className="text-white-fixed font-400 text-body-2 text-center">© 2022 - Todos os direitos reservados.</span>
      <div className="bg-grey-1 w-11 h-11 flex items-center justify-center">
        <ChevronUpIcon className="w-5 h-5 text-white-fixed" onClick={scrollToTop}/>
      </div>
    </section>
  );
};
