import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${css.btn} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
