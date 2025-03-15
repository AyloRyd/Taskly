import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = {
  label: string;
  textarea?: boolean;
} & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>);

const Input: React.FC<InputProps> = ({ label, textarea, ...props }) => {
  const baseClasses =
    "w-full p-2 border-b-2 rounded-xl border-stone-200 dark:border-stone-600 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-200 focus:outline-none focus:border-stone-600 dark:focus:border-stone-200";
  const inputClasses = `h-[2.5rem] ${baseClasses}`;
  const textareaClasses = `h-[10rem] ${baseClasses}`;

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500 dark:text-stone-300">
        {label}
      </label>
      {textarea ? (
        <textarea className={textareaClasses} {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input className={inputClasses} {...(props as InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </p>
  );
};

export default Input;
