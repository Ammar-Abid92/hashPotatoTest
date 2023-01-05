import React from "react";

export default function SidebarSubsection({ text, value }) {
  return (
    <div className="flex relative ml-6 my-3 gap-10 justify-self-center">
      <span className="">{text}</span>
      <span className="absolute inset-y-0 right-0">{value}</span>
    </div>
  );
}
