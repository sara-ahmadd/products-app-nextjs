"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Refresh() {
  const router = useRouter();
  function refresh() {
    router.refresh();
  }
  return (
    <button onClick={refresh} className="btn btn-success fixed left-0 top-1/2">
      Refresh Products
    </button>
  );
}
