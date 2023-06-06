interface iButton {
  variant: keyof typeof variantStyle;
  text: string;
  size: keyof typeof sizeStyle;
}

const sizeStyle = {
  medium: "button-medium",
  big: "button-big",
};

const variantStyle = {
  grey1: "bg-grey-1 hover:bg-grey-2 text-white-fixed",
  grey6: "bg-grey-6 hover:bg-grey-5 text-grey-2",
  greyDisable: "bg-grey-5  text-white-fixed",
  brand1: "bg-brand-1 hover:bg-brand-2 text-white-fixed",
  brand4: "bg-brand-4 hover:bg-brand-3 text-brand-1",
  light: "bg-grey-10 hover:bg-white-fixed text-grey-1",
  outline1:
    "bg-white-fixed hover:bg-grey-0 text-grey-1 hover:text-grey-10 border-[1.5px] border-grey-0",
  outline2:
    "bg-white-fixed hover:bg-grey-0 text-grey-1 hover:text-grey-10 border-[1.5px] border-grey-4",
  outline3:
    "bg-white-fixed hover:bg-brand-4 text-brand-1 border-[1.5px] border-brand-1 border-solid",
  link: "bg-white-fixed hover:bg-grey-8 text-brand-1",
  alert: "bg-alert-3 hover:bg-alert-2 text-alert-1",
  success: "bg-random-8 hover:bg-random-7 text-random-9",
  brandDisable: "bg-brand-3  text-grey-1",
};

export const Button = ({ variant, text, size }: iButton) => {
  return (
    <button className={`${variantStyle[variant]} ${sizeStyle[size]}`}>
      {text}
    </button>
  );
};
