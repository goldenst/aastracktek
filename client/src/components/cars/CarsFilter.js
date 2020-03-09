import React, { useContext, useRef, useEffect } from "react";

const CarsFilter = () => {
  //const dailyWorkContext = useContext(DailyWorkContext);

  const text = useRef("");

 // const { filterCar, clearFilter, filtered } = dailyWorkContext;

  // useEffect(() => {
  //   if (filtered === null) {
  //     text.current.value = "";
  //   }
  // });

  // const onChange = e => {
  //   if (text.current.value !== "") {
  //     filterCar(e.target.value);
  //   } else {
  //     clearFilter();
  //   }
  // };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Cars... by Car Number or Division"
        //onChange={onChange}
      />
    </form>
  );
};


export default CarsFilter