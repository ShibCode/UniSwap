import React from "react";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CategoryBox.css";

export default function CategoryBox({ title, desc, order }) {
  return (
    <div className="category">
      <div className={`category-left ${order ? "order2" : ""}`}>
        <h2 className="category-heading">{title}</h2>
        <p className="category-para">{desc}</p>
      </div>
      <div className="category-right">
        <h1 className="category-right-heading">300+</h1>
        <p className="category-right-para">Integrations</p>
        <button className="explore-all">
          Explore all <FontAwesomeIcon icon={faArrowUp} className="arrow-up" />
        </button>
      </div>
    </div>
  );
}
