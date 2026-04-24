import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={css.btn}>
      {children}
    </button>
  );
};

export default Button;
