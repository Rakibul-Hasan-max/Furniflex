import React from "react";

import banner3 from "../../assets/banner3.png";
import prod1 from "../../../src/assets/products/p1.jpg";
import prod2 from "../../../src/assets/products/p2.jpg";
import prod4 from "../../../src/assets/products/p4.jpg";

const Products = () => {
  return (
    <div>
      <img src={banner3} alt="" />
      <div role="tablist" className="tabs tabs-bordered p-20">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Rocking chair"
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure className="w-80">
              <img src={prod1} />
            </figure>
            <div className="card-body bg-white text-black w-80">
              <h2 className="card-title">Recliner Chair Wood</h2>
              <h5>
                €299.00 <del>€350.00</del> 30% OFF
              </h5>
              <p>
                It has a backrest that can be tilted back, and often a footrest
                extended
              </p>
              <div className="card-actions">
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Side chair"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure className="w-80">
              <img src={prod2} />
            </figure>
            <div className="card-body bg-white text-black w-80">
              <h2 className="card-title">Recliner Chair Wood</h2>
              <h5>
                €299.00 <del>€350.00</del> 30% OFF
              </h5>
              <p>
                It has a backrest that can be tilted back, and often a footrest
                extended
              </p>
              <div className="card-actions">
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Lounge chair"
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure className="w-80">
              <img src={prod4} />
            </figure>
            <div className="card-body bg-white text-black w-80">
              <h2 className="card-title">Recliner Chair Wood</h2>
              <h5>
                €299.00 <del>€350.00</del> 30% OFF
              </h5>
              <p>
                It has a backrest that can be tilted back, and often a footrest
                extended
              </p>
              <div className="card-actions">
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
