import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import "./CheckIcon.css";

const CheckIcon = () => {
  const [check, setCheck] = useState(false);
  return (
    <>
      <AiFillCaretRight
        className={check? "icon green" : "icon red"}
        onClick={() => {
          if (check) return setCheck(false);
          setCheck(true);
        }}
      />
    </>
  );
};

export default CheckIcon;