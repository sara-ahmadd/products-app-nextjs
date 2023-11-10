"us client";
import Link from "next/link";
import React from "react";

export default function Thanks() {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-3 sm:mx-auto my-14">
      <div className="card-body">
        <h2 className="card-title">Thanks!</h2>
        <p>Thanks for your feedback!</p>
        <div className="card-actions justify-end">
          <Link href={"/"} className="btn btn-primary text-center">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
