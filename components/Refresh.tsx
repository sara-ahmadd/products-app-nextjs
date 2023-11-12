"use client";
import React from "react";

export default function Refresh() {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <button onClick={refresh} className="btn btn-success fixed left-0 top-1/2">
      Refresh Products
    </button>
  );
}
