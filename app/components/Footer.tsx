import { Divider } from "@nextui-org/react";
import React from "react";

export const Footer = () => {
  return (
    <>
      <Divider />
      <div className="container my-3 p-3">
        <div className="row g-3">
          <div className="col-12 text-center">
            <h3 className="text-xl font-bold">
              Fristroop Development {new Date().getFullYear()}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
