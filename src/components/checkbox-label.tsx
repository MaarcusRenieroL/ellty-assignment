import { FC } from "react";

// CheckboxLabel component
interface CheckboxLabelProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const CheckboxLabel: FC<CheckboxLabelProps> = ({
  label,
  checked,
  onChange,
}) => (
  <label className="relative flex items-center justify-between cursor-pointer text-lg">
    {label}
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only peer"
    />
    <span className="absolute right-0 top-0 w-6 h-6 bg-gray-300 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-hover:bg-gray-200 transition">
      {checked && (
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12l5 5L20 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  </label>
);
