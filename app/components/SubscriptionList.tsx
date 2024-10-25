"use client";

import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export default function SubscriptionList() {
  const [list, setList] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const getSubscriptions = async () => {
    setLoading(true);
    for (let index = 0; index < 5; index++) {
      setList((prev) => [...prev, index]);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

  if (loading) {
    return <Loading size={"md"} type={0} />;
  }
  return list.map((item, key) => (
    <div className="card bg-[#EFDB91] w-full max-w-4xl shadow-lg" key={key}>
      <div className="card-body">
        <h2 className="card-title">Netflix</h2>
        <p>100 USD {"(Monthly)"}</p>
      </div>
    </div>
  ));
}
