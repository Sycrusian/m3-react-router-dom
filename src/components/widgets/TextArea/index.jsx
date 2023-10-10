import { forwardRef } from "react";

export const TextArea = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea ref={ref} id={id} {...rest} />
      {error && <span>{error.message}</span>}
    </div>
  );
});