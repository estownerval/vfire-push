import React, { InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: string;
  showPasswordToggle?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  showPasswordToggle,
  className,
  type = "text",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? "text" : type;

  return (
    <div className="mb-[30px]">
      <div className="text-black text-xl font-semibold mb-1.5 max-sm:text-base">
        {label}
      </div>
      <div className="relative w-full">
        <img
          src={icon}
          alt={`${label} icon`}
          className="absolute -translate-y-2/4 w-8 h-8 left-[15px] top-2/4"
        />
        <input
          type={inputType}
          className={cn(
            "w-full h-16 text-xl text-[#9B9B9B] font-semibold bg-[#E2E2E2]",
            "px-[50px] py-0 rounded-[20px] border-[none]",
            "max-sm:h-[50px] max-sm:text-base",
            "focus:outline-none focus:ring-2 focus:ring-[#FE623F] focus:ring-opacity-50",
            className,
          )}
          {...props}
        />
        {showPasswordToggle && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f970cab0960380d96255fe35b23302cd24aa036"
            alt="Show password"
            className="absolute -translate-y-2/4 w-[30px] h-[30px] opacity-50 cursor-pointer right-[15px] top-2/4 hover:opacity-75"
            onClick={togglePassword}
          />
        )}
      </div>
    </div>
  );
};
