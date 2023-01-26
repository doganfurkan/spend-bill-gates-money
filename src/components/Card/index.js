import React from "react";
import Actions from "../Actions"
import { Card } from "antd";
import "./style.css"

export default function MyCard({imgSrc,itemName, itemPrice,itemBought,id}) {
    const { Meta } = Card;

  return (
    <div className="thiscard">
      <Card hoverable="true"
      className="mycard"
        cover={
          <img
            alt="example"
            src={imgSrc}
            width={"auto"}
          />
        }
        actions={[
          <Actions id={id} bought={itemBought}/>
        ]}
      >
        <Meta
          title={itemName}
          description={`$ ${Number(itemPrice).toLocaleString()}`}
        />
      </Card>
    </div>
  );
}
