type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({
  label,
  type,
  placeholder = "",
  value,
  name = "",
  onChange,
}: InputProps) => {
  let inputType: string;

  switch (type) {
    case "t":
      inputType = "text";
      break;
    case "n":
      inputType = "number";
      break;
    case "d":
      inputType = "date";
      break;
    case "p":
      inputType = "password";
      break;

    default:
      inputType = "text";
      break;
  }

  return (
    <label className="form-control w-full max-w-4xl">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        className="input input-bordered w-full"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
