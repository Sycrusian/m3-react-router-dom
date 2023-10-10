import { forwardRef } from "react";

export const Select = forwardRef(({ label, id, error, children, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} ref={ref} {...rest}>
        {children}
      </select>
      {error && <span>{error.message}</span>}
    </div>
  );
});