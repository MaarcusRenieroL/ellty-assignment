"use client";

import { FC, useState } from "react";
import { Button } from "./button";

type CheckboxState = {
  allPages: boolean;
  page1: boolean;
  page2: boolean;
  page3: boolean;
  page4: boolean;
};

type PageName = "allPages" | "page1" | "page2" | "page3" | "page4";

export const Menu: FC = () => {
  const [checkedPages, setCheckedPages] = useState<CheckboxState>({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleCheckboxChange = (page: PageName) => {
    setCheckedPages((prev: CheckboxState) => {
      const updatedState: CheckboxState = { ...prev, [page]: !prev[page] };

      if (!updatedState[page] && page !== "allPages") {
        updatedState.allPages = false;
      }

      if (page !== "allPages") {
        const allChecked = (Object.keys(updatedState) as PageName[]).every(
          (key) => key === "allPages" || updatedState[key],
        );
        updatedState.allPages = allChecked;
      }

      if (page === "allPages") {
        const allChecked = !prev.allPages;
        (Object.keys(updatedState) as PageName[]).forEach(
          (key) => (updatedState[key] = allChecked),
        );
      }

      return updatedState;
    });
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-white drop-shadow-lg p-10 space-y-5 rounded-md">
        <label className="flex items-center justify-between">
          <span>All Pages</span>

          <input
            type="checkbox"
            checked={checkedPages["allPages"]}
            onChange={() => handleCheckboxChange("allPages")}
            className="form-checkbox"
          />
        </label>
        <div className="border-b" />
        {["page1", "page2", "page3", "page4"].map((page: string, index) => (
          <label key={index} className="flex items-center justify-between">
            <span>{`Page ${index + 1}`}</span>
            <input
              type="checkbox"
              // @ts-ignore
              checked={checkedPages[page]}
              // @ts-ignore
              onChange={() => handleCheckboxChange(page)}
              className="form-checkbox"
            />
          </label>
        ))}
        <div className="border-b" />
        <div />
        <Button />
      </div>
    </div>
  );
};
