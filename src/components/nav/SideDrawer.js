import React, { useState } from "react";
import "./sidedrawer.css";
import { useTranslation } from "react-i18next";

const SideDrawer = (props) => {
  const { t } = useTranslation();

  const [dropdown, setDropdown] = useState(false);

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div className={drawerClasses} style={{ paddingTop: "20%" }}>
      <a href='/#' className='nav-link w-nav-link w--nav-link-open'>
        {t("nav_home")}
      </a>
      <a
        href='/#'
        className='nav-link w-nav-link w--nav-link-open'
        onClick={() => setDropdown(!dropdown)}
        style={{ cursor: "pointer" }}
      >
        {t("nav_stats")}
      </a>
    </div>
  );
};
export default SideDrawer;
