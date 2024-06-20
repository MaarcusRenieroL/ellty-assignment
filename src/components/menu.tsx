"use client";

import React, { FC, useState } from "react";
import { CheckboxLabel } from "./checkbox-label";
import { Button } from "./button";

type CheckboxState = {
  allPages: boolean;
  page1: boolean;
  page2: boolean;
  page3: boolean;
  page4: boolean;
};

type PageName = "allPages" | "page1" | "page2" | "page3" | "page4";

export const CustomCheckboxGroup: FC = () => {
  // Define the state to manage the checkbox selections
  const [checkedPages, setCheckedPages] = useState({
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-fit">
        <div className="space-y-4 mb-4">
          <CheckboxLabel
            label="All Pages"
            checked={checkedPages.allPages}
            onChange={() => handleCheckboxChange("allPages")}
          />
          <hr />
          <CheckboxLabel
            label="Page 1"
            checked={checkedPages.page1}
            onChange={() => handleCheckboxChange("page1")}
          />
          <CheckboxLabel
            label="Page 2"
            checked={checkedPages.page2}
            onChange={() => handleCheckboxChange("page2")}
          />
          <CheckboxLabel
            label="Page 3"
            checked={checkedPages.page3}
            onChange={() => handleCheckboxChange("page3")}
          />
          <CheckboxLabel
            label="Page 4"
            checked={checkedPages.page4}
            onChange={() => handleCheckboxChange("page4")}
          />
          <hr />
        </div>

        <Button />
      </div>
    </div>
  );
};
