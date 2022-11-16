import React from "react";
import "./rds-fab-menu.scss";
import { Colors } from "../../libs/types";
import RdsIcon from "../rds-icon";

export interface RdsFabMenuProps {
  colorVariant?: Colors;
  size?: string;
  menuIcon?: string;
  menuiconWidth?: string;
  menuiconHeight?: string;
  listItems: any[];
  onClick?: ( React.MouseEventHandler<HTMLButtonElement>);
}

const RdsFabMenu = (props: RdsFabMenuProps) => {
  let customClasses = `rounded-pill btn btn-${props.colorVariant} btn-icon fab-btn ${
    props.size == "small" ? "btn-sm" : props.size == "large" ? "btn-lg" : ""
  }`;

  return (
    <>
      <button
        className={customClasses}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* <RdsIcon
          name={}
          fill={false}
          stroke={true}
          height="10px"
          width="10px"
        ></RdsIcon> */}
      </button>
      <div className="dropdown-menu fab-dropdown border-0 shadow mb-1">
        {props.listItems.map((listItem)=>(
          <a className="dropdown-item fab-dropdown-item d-flex gap-3" onClick={listItem.onClick}>
              <RdsIcon name={listItem.icon} height={listItem.iconHeight} width={listItem.iconWidth}></RdsIcon>
              {listItem.value}
          </a>
        ))}
      </div>
    </>
  );
};

export default RdsFabMenu;
