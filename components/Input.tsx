import React from "react";

const Input = ({
  className,
  placeholder,
  type,
  labelName,
  value,
  onChangeHandle,
}: {
  className?: string;
  placeholder?: string;
  type: InputType;
  labelName?: string;
  value?: string;
  onChangeHandle?: (data: string) => void;
}) => {

  
  return (
    <div
      className={`min-w-[120px] min-h-[20px] p-[11px] bg-white rounded-[10px] drop-shadow-lg ${className}`}
    >
      {labelName && <label className="text-[#C5C5C5]">{labelName}</label>}
      {type === "textarea" ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(eve) => onChangeHandle && onChangeHandle(eve.target.value)}
          className="text-field"
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(eve) => onChangeHandle && onChangeHandle(eve.target.value)}
          className="text-field"
        />
      )}
    </div>
  );
};
type InputType = "text" | "email" | "password" | "textarea";
export default Input;
