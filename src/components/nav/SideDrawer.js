import React, { useState } from "react";
import "./sidedrawer.css";
import facebook from "../../assets/images/facebook.png";

const SideDrawer = (props) => {
  const [dropdown, setDropdown] = useState(false);

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div className={drawerClasses} style={{ paddingTop: "20%" }}>
      <a href='/Home' className='nav-link w-nav-link w--nav-link-open'>
        HOME
      </a>
      <a
        className='nav-link w-nav-link w--nav-link-open'
        onClick={() => setDropdown(!dropdown)}
        style={{ cursor: "pointer" }}
      >
        STATS
      </a>
      {dropdown && (
        <div style={{ textAlign: "center" }}>
          <img src={facebook} style={{ height: "40px" }} />
          <a
            href='/Stats/Tunisia/Facebook'
            className='nav-link w-nav-link w--nav-link-open statsOpenRes'
          >
            Facebook
          </a>
        </div>
      )}
    </div>
  );
};
export default SideDrawer;
