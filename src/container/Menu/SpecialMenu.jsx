import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu section__padding flex__center" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <ul className="app__specialMenu-menu_items">
          {data.wines.map(wine => (
            <li className="app__specialMenu-menu_item" key={wine.title}>
              <MenuItem
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <ul className="app__specialMenu-menu_items">
          {data.cocktails.map(cocktail => (
            <li className="app__specialMenu-menu_item" key={cocktail.title}>
              <MenuItem
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
