import React, { Fragment } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./rds-breadcrumb.scss";
import RdsIcon from "../rds-icon";

export interface breadcrumbprop {
  breadItems: any[];
  role?: string;
}

const RdsBreadcrumb = (props: breadcrumbprop) => {
  const Role = `${props.hasOwnProperty("role") ? props.role : "default"}`;
  const divider = {
    marginLeft: '5px',
    marginRight: '5px',
    color: "#373535e6",
    height: '16px',
    width: '16px',
  }
  return (
    <Fragment>
      {Role === "advance" && <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {props.breadItems.map((breadItem, index) => {
            return index == 0 ? (
              <li key={"breadItem-"+index} className={`${breadItem.active}`} id='breaditem1'>
                {breadItem.icon&&<span className="me-2">
                  <RdsIcon name={breadItem.icon} fill={breadItem.iconFill} stroke={breadItem.iconstroke} width={breadItem.iconWidth} height={breadItem.iconHeight} colorVariant={breadItem.iconColor} />
                </span>}
                <a href={breadItem.route} aria-disabled="true">
                  {breadItem.label}
                </a>
              </li>
            ) : (
              <li key={"breadItem-"+index} className={`breadcrumb-item ${breadItem.active}`} id="breadcrumbItems">
                <span style={divider}>
                  <RdsIcon name="chevron_right" stroke={true} height="7px" width="4px"/>
                </span>
                {breadItem.icon&&<span className="ms-1 me-2">
                  <RdsIcon name={breadItem.icon} fill={breadItem.iconFill} stroke={breadItem.iconstroke} width={breadItem.iconWidth} height={breadItem.iconHeight} colorVariant={breadItem.iconColor} />
                </span>}
                <a href={breadItem.route} aria-disabled="true">
                  {breadItem.label}
                </a>

              </li>
            );
          })}
        </ol>
      </nav>}
      {Role === "default" && <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {props.breadItems.map((breadItem, index) => (

            <li key={"breadItem-"+index} className={`breadcrumb-item ${breadItem.active}`}>
              <a href={breadItem.route} aria-disabled="true">
                {breadItem.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>}

      {Role === "arrow" && <div className="RdsBreadcrumb__arrow">
        <div>
          <div className="btn-group btn-breadcrumb breadcrumb-default">
            {props.breadItems.map((item, index) => (
              <Fragment key={"breadkeyItem-"+index}>
                <a href={item.route} className="btn breadcrumb-text">
                  {item.label}
                </a>
                <span className={index!=(props.breadItems.length-1)?"btn dividing-arrow":"btn dividing-arrow last-dividing-arrow"}>
                  <span className="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 104" height="26px" width="13px" className="dividing-arrow-svg">
                      <polygon fill="currentColor" points="0,0 48,52 0,104 4,104 52,52 4,0" />
                    </svg>
                  </span>
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div >
      }

    </Fragment >
  );
};

export default RdsBreadcrumb;
