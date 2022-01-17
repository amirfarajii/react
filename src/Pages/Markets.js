import React, { useState } from "react";
import { Link,Outlet,  } from "react-router-dom";







const Markets = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(true);
  const [click3, setClick3] = useState(true);
  const [click4, setClick4] = useState(true);
  const [click5, setClick5] = useState(true);

  const handelClick1 = () => {
    if (click1 == false) {
      setClick1(false);
    } else {
      setClick1(!click1);
    }
    setClick2(true);
    setClick3(true);
    setClick4(true);
    setClick5(true);
  };
  const handelClick2 = () => {
    if (click2 == false) {
      setClick2(false);
    } else {
      setClick2(!click2);
    }
    setClick1(true);
    setClick3(true);
    setClick4(true);
    setClick5(true);
  };
  const handelClick3 = () => {
    if (click3 == false) {
      setClick3(false);
    } else {
      setClick3(!click3);
    }

    setClick1(true);
    setClick2(true);
    setClick4(true);
    setClick5(true);
  };
  const handelClick4 = () => {
    if (click4 == false) {
      setClick4(false);
    } else {
      setClick4(!click4);
    }
    setClick1(true);
    setClick2(true);
    setClick3(true);
    setClick5(true);
  };
  const handelClick5 = () => {
    if (click5 == false) {
      setClick5(false);
    } else {
      setClick5(!click5);
    }
    setClick1(true);
    setClick2(true);
    setClick3(true);
    setClick4(true);
  };

  return (
    <>
      <div>
        <div className="dot">
          <Link className="dot-items" to="/markets/" onClick={handelClick1}>
            <i
              className="dot-item"
              class={click1 ? "fas fa-circle" : "far fa-circle"}
            ></i>
          </Link>
          <Link className="dot-items" to="/markets/2" onClick={handelClick2}>
            <i class={click2 ? "fas fa-circle" : "far fa-circle"}></i>
          </Link>
          <Link className="dot-items" to="/markets/3" onClick={handelClick3}>
            <i class={click3 ? "fas fa-circle" : "far fa-circle"}></i>
          </Link>
          <Link className="dot-items" to="/markets/4" onClick={handelClick4}>
            <i class={click4 ? "fas fa-circle" : "far fa-circle"}></i>
          </Link>
          <Link className="dot-items" to="/markets/5" onClick={handelClick5}>
            <i class={click5 ? "fas fa-circle" : "far fa-circle"}></i>
          </Link>
        </div>
      </div>
     <Outlet />
    </>
  );
};

export default Markets;
