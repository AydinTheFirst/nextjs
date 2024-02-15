import React from "react";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";

const Pricing = () => {
  return (
    <>
      <Nav />
      <div className="container my-3 md:my-10">
        <div className="row g-3">
          <div className="col-12">
            <div className="flex justify-center">
              <div className="col-md-6 text-center">
                <h3 className="text-3xl font-bold">Pricing</h3>
                <p>
                  The base price for any website serves as the starting point in
                  our pricing structure. The final cost will be determined based
                  on the specific features you want to include in your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PriceCards />
      <Footer />
    </>
  );
};

export default Pricing;

const PriceCards = () => {
  return (
    <div className="container my-10">
      <div className="row g-3">
        <div className="col-lg-4 col-md-6">x</div>
        <div className="col-lg-4 col-md-6">x</div>
        <div className="col-lg-4 col-md-6">x</div>
        <div className="col-lg-4 col-md-6">x</div>
      </div>
    </div>
  );
};
