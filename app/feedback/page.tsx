"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const initState = {
  name: "",
  email: "",
  messege: "",
};

function Feedback() {
  const [form, setFrom] = useState(initState);
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFrom({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const d = fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: { Content: "Application/json" },
      body: JSON.stringify(form),
    }).then((res) => res);
    router.push("/thanks");

    setFrom(initState);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-start w-fit mx-auto my-0 pt-5 gap-4"
    >
      <input
        type="text"
        id="name"
        onChange={handleChange}
        placeholder="Name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        id="email"
        onChange={handleChange}
        placeholder="Email"
        className="input input-bordered w-full max-w-xs"
      />
      <textarea
        onChange={(e) => setFrom({ ...form, messege: e.target.value })}
        className="textarea textarea-bordered"
        placeholder="Messege"
      ></textarea>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Feedback;
