import { forwardRef } from "react";

export const Button = forwardRef(({ children, ...rest }, ref) => {
  return (
    <button {...rest}>
      {children}
    </button>
  );
});