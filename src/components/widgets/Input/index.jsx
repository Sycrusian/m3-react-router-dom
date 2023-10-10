import { forwardRef } from "react"

export const Input = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} {...rest} />
      {error && <span>{error.message}</span>}
    </div>
  );
});