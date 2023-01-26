import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

export default function Receipt() {
  const items = useSelector((state) => state.items.onsale);
  const total = useSelector((state) => state.items.total);
  const buying = items.filter(item => item.count > 0);
  const tarih = new Date();
  var gun = tarih.getDate();
  var ay = tarih.getMonth();
  var yil = tarih.getFullYear();
  return (
    <div id="receiptduzen">
      <div id="receipt">
        <div id="receiptheader">
          <div id="fis">Receipt</div>
          <div id="trh">{gun < 10 ? `0${gun}` : gun}/{ay+1 < 10 ? `0${ay+1}` : ay+1}/{yil}</div>
        </div>
        <div id="bought">
          <div id="boughtHeader">
            <div>Piece</div>
            <div id="isim">Name</div>
            <div>Price</div>
          </div>
          {buying.map((item) => {
            return (
              <div className="boughtitem" key={item.id}>
                <div className="adet">{item.count} x</div>
                <div className="itemname">{item.productName}</div>
                <div className="price">${Number((item.productPrice)).toLocaleString()}</div>
              </div>
            );
          })}
        </div>
        <div id="total">
          <span>Total</span> ${Number(total).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
