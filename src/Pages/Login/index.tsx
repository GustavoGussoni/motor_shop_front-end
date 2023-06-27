import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { HeadingText } from "../../Style/HeadingText";
import { FormLogin } from "../../Components/Form/FormLogin";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ModalDefault } from "../../Components/ModalDefault";

export const Login = () => {
  const [openRecoverPassword, setOpenRecoverPassword] =
    useState<boolean>(false);
  const query = useQuery();

  useEffect(() => {
    if (query.get("resetPassword")) {
      setOpenRecoverPassword(true);
    }
  }, []);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

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
      <ModalDefault
        open={openRecoverPassword}
        setOpen={setOpenRecoverPassword}
      ></ModalDefault>
    </div>
  );
};
