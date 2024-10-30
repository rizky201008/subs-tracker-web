"use client";

import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { SubscriptionItem } from "./SubscriptionItem";

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
  return list.map((item, key) => <SubscriptionItem key={key} data={item} />);
}
