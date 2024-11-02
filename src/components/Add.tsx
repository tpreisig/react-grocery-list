import React from "react";
import { IoDuplicateOutline } from "react-icons/io5";

const Add = () => {
  return (
    <form className="addForm">
      <label htmlFor="name">Add Item </label>
      <input type="text" />
      <button>
        <IoDuplicateOutline />
      </button>
    </form>
  );
};

export default Add;
