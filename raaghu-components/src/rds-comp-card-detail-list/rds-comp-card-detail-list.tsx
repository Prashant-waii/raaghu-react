import React from "react";
import { RdsBankCardDetail } from "raaghu-react-elements";
import "./rds-comp-card-detail-list.scss";

export interface RdsCompCardDetailListProps {
  cardDatas: any[];
  isSelectable?: boolean;
  isEditable?: boolean;
}

const RdsCompCardDetailList = (props: RdsCompCardDetailListProps) => {
  return (
    <>
      <div className="m-1 p-1 ">
        <RdsBankCardDetail
          cardDatas={props.cardDatas}
          isSelectable={props.isSelectable || false}
          isEditable={props.isEditable || false}
        />
      </div>
    </>
  );
};
export default RdsCompCardDetailList;
