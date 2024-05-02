"use client";
import { universities } from "@/actions/domains";
import { useEffect, useState } from "react";

export default function Domains() {
  const [domains, setDomains] = useState<string[]>();
  useEffect(() => {
    setDomains(universities);
  }, []);
  return (
    <div className="text-white p-4">
      <div>{JSON.stringify(domains)}</div>
    </div>
  );
}
