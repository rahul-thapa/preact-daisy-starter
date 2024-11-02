import cn from "../../utils/cn";

const Button = ({ variant, size = "md", className, children, ...props }) => {
  return (
    <button className={cn("btn", `btn-${variant}`, size && `btn-${size}`, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
