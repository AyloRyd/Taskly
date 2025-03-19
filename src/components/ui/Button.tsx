import clsx from "clsx";

type ButtonType = "primary" | "secondary" | "gradient" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  const baseStyles = "cursor-pointer px-4 py-2 rounded-xl transition-colors ease-in-out";

  const variantStyles = {
    primary:
      "bg-stone-700 dark:bg-stone-100 text-stone-100 dark:text-stone-900 hover:bg-stone-600 dark:hover:bg-stone-300",
    secondary:
      "bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-600",
    gradient:
      "text-stone-100 bg-gradient-to-br from-purple-600 dark:from-purple-700 to-teal-600 dark:to-teal-700 hover:from-purple-700 dark:hover:from-purple-600 hover:to-teal-600 dark:hover:to-teal-600",
    danger:
      "text-stone-50 bg-red-600 hover:bg-red-500",
  };

  return (
    <button className={clsx(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
