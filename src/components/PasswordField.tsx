// src/components/PasswordField.tsx
import type { FC, ChangeEvent } from "react";
import { useState } from "react";

import EyeOpenIcon from "../assets/icons/eye-open.png";     // 뜬 눈
import EyeClosedIcon from "../assets/icons/eye-closed.png"; // 감은 눈

type PasswordFieldProps = {
  label: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PasswordField: FC<PasswordFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="FormGroup">
      <label className="FormLabel" htmlFor={name}>
        {label}
      </label>

      <div className="PasswordField__wrapper">
        <input
          id={name}
          name={name}
          type={show ? "text" : "password"}
          className="FormInput PasswordField__input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {/* 👁️ 아이콘을 인풋 안에 삽입 */}
        <button
          type="button"
          className="PasswordField__toggle"
          onClick={() => setShow((prev) => !prev)}
        >
          <img
            src={show ? EyeOpenIcon : EyeClosedIcon}
            alt="toggle visibility"
            className="PasswordField__icon"
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordField;