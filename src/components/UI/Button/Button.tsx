import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;

  onClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`${css.btn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
