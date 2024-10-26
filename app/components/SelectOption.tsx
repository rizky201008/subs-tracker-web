
export const SelectOption = ({
  option,
  isDisabled = false,
  isSelected = false,
}: {
  option: OptionData;
  isDisabled?: boolean;
  isSelected?: boolean;
}) => {
  return (
    <option value={option.value} disabled={isDisabled}>
      {option.text}
    </option>
  );
};
