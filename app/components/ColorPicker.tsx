export const ColorPicker = ({
  color = "#EFDB93",
  active = false,
  onClick,
}: {
  color?: string;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-center items-center rounded-full border-2 w-[60px] h-[60px] cursor-pointer`}
      style={{ borderColor: active ? color : "transparent" }}
    >
      <div
        className={`w-[50px] h-[50px] rounded-full`}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};
