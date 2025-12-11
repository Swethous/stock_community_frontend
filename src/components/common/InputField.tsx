// src/components/InputField.tsx
import type { FC, ChangeEvent } from "react";

type InputFieldProps = {
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
};

const InputField: FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
}) => {
  return (
    <div className="FormGroup">
      <label className="FormLabel" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="FormInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputField;