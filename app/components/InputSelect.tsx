import { SelectOption } from "./SelectOption";

type InputSelectProps = {
  value: string;
  label: string;
  options: OptionData[];
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const InputSelect = ({
  value,
  label,
  options,
  name,
  onChange,
}: InputSelectProps) => {
  return (
    <label className="form-control w-full max-w-4xl">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        name={name}
        className="select select-bordered w-full"
        onChange={onChange}
        value={value}
      >
        <SelectOption
          option={{ value: "", text: "Select your billing cycle" }}
          isDisabled={true}
        />
        {options.map((option, key) => (
          <SelectOption key={key} option={option} />
        ))}
      </select>
    </label>
  );
};
