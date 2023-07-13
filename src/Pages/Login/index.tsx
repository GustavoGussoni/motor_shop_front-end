import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { HeadingText } from "../../Style/HeadingText";
import { FormLogin } from "../../Components/Form/FormLogin";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FormPasswordRecover } from "../../Components/Form/FormPasswordRecovery";

export const Login = () => {
  const query = useQuery();

  const [formRecover, setFormRecover] = useState(false);

  useEffect(() => {
    const newToken = query.get("resetPassword");

    if (newToken) {
      setFormRecover(true);
    }
  }, []);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  return (
    <div className="w-screen h-[100vh] bg-grey-8 flex flex-col justify-between">
      <Header />
      <main className="flex mt-[66px] items-center">
        {formRecover ? (
          <FormPasswordRecover
            setOpen={setFormRecover}
            token={query.get("resetPassword")}
          />
        ) : (
          <div className="max-w-[411px] w-full bg-grey-10 px-[48px] py-[44px]">
            <HeadingText tag="heading-5-500">Login</HeadingText>
            <FormLogin />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
