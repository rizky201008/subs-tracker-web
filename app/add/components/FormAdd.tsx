"use client";

import { Input } from "@/app/components/Input";
import { InputSelect } from "@/app/components/InputSelect";
import { InputSwitch } from "@/app/components/InputSwitch";
import { useState } from "react";

export const FormAdd = () => {
  const [data, setData] = useState({
    platform: "",
    fee: "",
    date: "",
    cycle: "",
    remind: false,
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
    <>
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
      <button className="btn btn-primary w-full max-w-4xl">Save</button>
    </>
  );
};
