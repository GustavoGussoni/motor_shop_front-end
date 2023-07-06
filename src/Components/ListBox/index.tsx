import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ElementType, Fragment } from "react";

export interface iListBox {
  array: string[];
  register: object;
  selected?: any;
  setSelected?: any;
  as: ElementType;
  //   onBlur?: (e: any) => void;
}

export const MyListBox = ({
  array,
  register,
  selected,
  setSelected,
  as,
}: iListBox) => {
  return (
    <Listbox {...register} onChange={setSelected}>
      <Listbox.Button>{selected}</Listbox.Button>
      <Listbox.Options>
        {array.map((model: any) => (
          <Listbox.Option key={model.name} value={model} as={Fragment}>
            {/* {({ active, selected }) => (
              <li
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {selected && <CheckIcon />}
                {model.name}
              </li>
            )} */}
            {model.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
