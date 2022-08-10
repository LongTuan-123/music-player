const Button = ({ to }, href, children, onClick) => {
  let Comp = "button";
  return (
    <Comp className="wrapper">
      <span>{children}</span>
    </Comp>
  );
};
export default Button;
