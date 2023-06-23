import { Dialog } from "@headlessui/react";

interface iModalDefault {
<<<<<<< HEAD
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
=======
    children: React.ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
>>>>>>> 6495eeb78eeacc815c27c6b087c799be4e019366
}

export const ModalDefault = ({ children, open, setOpen }: iModalDefault) => {
  return (
    <Dialog
      className="absolute z-50"
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">{children}</div>
    </Dialog>
  );
};
