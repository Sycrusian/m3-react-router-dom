import { forwardRef } from "react"

export const Input = forwardRef(({ label, htmlFor, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input ref={ref} {...rest} />
    </div>
  );
});