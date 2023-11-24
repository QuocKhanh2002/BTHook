import React, { useState } from "react";

function BaiTap() {
  const [number, setNumber] = useState(0);

  const Bai1 = () => {
    setNumber(number + 1);
  };
  //  bai 2

  //   const [text, setText] = useState([""]);
  //   const [textNumber, setTextNumber] = useState(0);
  //   const bai2 = () => {
  //     setTextNumber(text.value.length);
  //   };
  return (
    <div>
      <h2>Ban Da kick {number} lan</h2>
      <button onClick={Bai1}>Click de tang so lan </button>
      <br />
      <br />
      {/* bai2 */}
      {/* <input type="text" value={setText} />
      <h2>So ky tu:{textNumber}</h2> */}
    </div>
  );
}

export default BaiTap;
