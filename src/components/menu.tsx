"use client";

import { FC } from "react";
import { Button } from "./button";
export const Menu: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-white drop-shadow-lg p-10 space-y-5 rounded-md">
        <label className="flex items-center justify-between">
          <span>All Pages</span>

          <input type="checkbox" className="form-checkbox" />
        </label>
        <div className="border-b" />
        {["page1", "page2", "page3", "page4"].map((page: string, index) => (
          <label key={index} className="flex items-center justify-between">
            <span>{`Page ${index + 1}`}</span>
            <input type="checkbox" className="form-checkbox" />
          </label>
        ))}
        <div className="border-b" />
        <div />
        <Button />
      </div>
    </div>
  );
};
