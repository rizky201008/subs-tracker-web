"use client";

import { ColorPicker } from "@/app/components/ColorPicker";
import { Input } from "@/app/components/Input";
import { InputSelect } from "@/app/components/InputSelect";
import { InputSwitch } from "@/app/components/InputSwitch";
import { SubscriptionItem } from "@/app/components/SubscriptionItem";
import { useState } from "react";

export const FormAdd = () => {
  const colors = ["#EFDB91", "#FF9F9F", "#AED9E0", "#B5EAD7", "#FFD3B5"];
  const [data, setData] = useState({
    platform: "",
    fee: "",
    date: "",
    cycle: "",
    remind: false,
    color: "#EFDB91",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSwitchChange = (checked: boolean) => {
    setData({ ...data, remind: checked });
  };

  return (
    <div className="max-w-4xl w-full">
      <Input
        name="platform"
        placeholder="Netflix"
        label="Platform name"
        value={data.platform}
        onChange={handleInputChange}
      />
      <Input
        type="n"
        name="fee"
        placeholder="100"
        label="Subscription fee"
        value={data.fee}
        onChange={handleInputChange}
      />
      <Input
        type="d"
        name="date"
        label="Due date"
        value={data.date}
        onChange={handleInputChange}
      />
      <InputSelect
        name="cycle"
        label="Billing cycle"
        value={data.cycle}
        onChange={handleSelectChange}
        options={[
          { value: "W", text: "Weekly" },
          { value: "M", text: "Monthly" },
          { value: "Y", text: "Yearly" },
        ]}
      />
      <InputSwitch
        onChange={handleSwitchChange}
        name="remind"
        label="Remind me"
        selected={data.remind}
      />
      <div className="h-8"></div>
      <h3 className="text-md font-semibold text-start w-full">Preview</h3>
      <div className="flex flex-row items-start w-full my-2 gap-3">
        {colors.map((color, index) => (
          <ColorPicker
            onClick={() => setData({ ...data, color })}
            key={index}
            color={color}
            active={data.color === color}
          />
        ))}
      </div>
      <SubscriptionItem data={1} />
      <button className="btn btn-primary w-full my-3">Save</button>
    </div>
  );
};
