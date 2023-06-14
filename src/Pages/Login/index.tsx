import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { HeadingText } from "../../Style/HeadingText";
import { FormLogin } from '../../Components/Form/FormLogin';

export const Login = () => {
  return (
    <div className="w-screen bg-grey-8 flex flex-col justify-between">
      <Header />
      <main className="flex items-center">
        <div className="max-w-[411px] w-full bg-grey-10 px-[48px] py-[44px]">
          <HeadingText tag="heading-5-500">Login</HeadingText>
          <FormLogin />
        </div>
      </main>
      <Footer />
    </div>
  );
};
