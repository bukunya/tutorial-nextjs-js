"use client";
import React, { use } from "react";

const page = () => {
  const [name, setName] = React.useState("Afif");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
  };
  React.useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          defaultValue={name}
          className="border p-2"
        />
        <button type="submit" className="border">
          Submit
        </button>
      </form>
      <p className="mt-4">Name: {name}</p>
    </div>
  );
};

export default page;
