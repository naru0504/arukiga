import * as React from 'react';
import IconCook from "./assets/IconCook.svg";
import IconHistory from "./assets/IconHistory.svg";
import IconRecipe from "./assets/IconRecipe.svg";
import IconRefri_Green from "./assets/IconRefri_Green.svg";
import '../../index.css';

export const Navigation = () => {
  return <ul className="navigation">
    <li className="navigation-item">
      <a className="navigation-item-link" href="/">
        <img className="navigation-item-link-image" src={IconRecipe} alt="レシピ" />
        <span className="navigation-item-link-text">レシピ</span>
      </a>
    </li>
    <li className="navigation-item">
      <a className="navigation-item-link" href="/">
        <img className="navigation-item-link-image" src={IconHistory} alt="つくった" />
        <span className="navigation-item-link-text">つくった</span>
      </a>
    </li>
    <li className="navigation-item">
      <a className="navigation-item-link is-current" href="/">
        <img className="navigation-item-link-image" src={IconRefri_Green} alt="ある気が" />
        <span className="navigation-item-link-text">ある気が</span>
      </a>
    </li>
    <li className="navigation-item">
      <a className="navigation-item-link" href="/">
        <img className="navigation-item-link-image" src={IconCook} alt="マイページ" />
        <span className="navigation-item-link-text">マイページ</span>
      </a>
    </li>
  </ul>;
};
