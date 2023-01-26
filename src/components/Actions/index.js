import { Button, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { sell, buy, change } from "../../redux/items/itemsSlice";
import { useState, useEffect } from "react";
export default function Actions({id}) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.onsale);
  const ttl = useSelector((state) => state.items.total);
  const item = items.filter(i => i.id === id);
  const bulunan = items.find(item => item.id === id);
  const [deger,setDeger] = useState(bulunan.count);
  const giden = bulunan.id;

  useEffect(() => {
    dispatch(change({giden,deger}))
  },[deger])

  const handleSell = () => {
    dispatch(sell(id))
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.2em",
      }}
    >
      <Button disabled={item[0].count > 0 ? false : true} onClick={handleSell}>Sell</Button>
      <InputNumber min={0} value={bulunan.count} onChange={(e) => {setDeger(e)}}/>
      <Button disabled={item[0].productPrice <= (100000000000 - ttl) ? false : true} onClick={() => {dispatch(buy(id))}}>Buy</Button>
    </div>
  );
}
