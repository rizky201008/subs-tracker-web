type InputSwitchProps = {
  label: string;
  name: string;
  selected?: boolean;
  onChange?: (checked: boolean) => void;
};
export const InputSwitch = ({
  label,
  name,
  selected = false,
  onChange,
}: InputSwitchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.checked);
  };
  return (
    <div className="form-control w-full max-w-4xl items-start">
      <label className="label cursor-pointer gap-3">
        <span className="label-text">{label}</span>
        <input
          onChange={handleChange}
          name={name}
          type="checkbox"
          className="toggle"
          checked={selected}
        />
      </label>
    </div>
  );
};
