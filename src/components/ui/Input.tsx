import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label: string;
  textarea?: boolean;
} & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>);

const Input: React.FC<InputProps> = ({ label, textarea, className, ...props }) => {
  const baseClasses =
    "w-full p-2 border-b-2 rounded-xl focus:outline-none";
  const dynamicClasses = twMerge(clsx(
    baseClasses,
    "border-stone-200 dark:border-stone-700 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-200",
    "focus:border-stone-600 dark:focus:border-stone-200",
    textarea ? "h-[10rem]" : "h-[2.5rem]",
    className 
  ));

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500 dark:text-stone-300">
        {label}
      </label>
      {textarea ? (
        <textarea className={dynamicClasses} {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input className={dynamicClasses} {...(props as InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </p>
  );
};

export default Input;