interface iButton {
  variant: string;
  text: string;
}

export const Button = ({ variant, text }: iButton) => {
  return <button className={variant}>{text}</button>;
};
