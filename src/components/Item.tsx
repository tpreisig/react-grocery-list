import { IoTrashSharp } from "react-icons/io5";

const Item = () => {
  return (
    <li className="item">
      <input type="checkbox" />
      <label>Item exemplaribus</label>
      <IoTrashSharp />
    </li>
  );
};

export default Item;
