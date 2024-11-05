import React from "react";

interface Option<T> {
  value: T;
  label: string;
}

interface CustomSelectProps<T> {
  label: string;
  options: Option<T>[];
  defaultValue?: T;
  onChange?: (value: T) => void;
  customStyles?: {
    select?: React.CSSProperties;
    option?: React.CSSProperties;
  };
}

export function CustomSelect<T>({
  label,
  options,
  defaultValue,
  onChange,
  customStyles,
}: CustomSelectProps<T>) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = options.find(
      (option) => option.value + "" === event.target.value,
    )?.value;
    if (onChange && selectedValue !== undefined) {
      onChange(selectedValue);
    }
  };

  return (
    <select
      aria-label={label}
      defaultValue={defaultValue?.toString()}
      style={{
        height: "30px",
        marginRight: "5px",
        ...customStyles?.select,
      }}
      onChange={handleChange}
    >
      {options.map((o) => (
        <option
          key={o.value + ""}
          value={o.value + ""}
          style={customStyles?.option}
        >
          {o.label}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
