import React from "react";

import Generator from "./Generator";
import { useTranslation } from "react-i18next";

const PasswordGeneratorComponent = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='main-page-container w-container containerA'>
        <h1
          className='main-page-h1'
          style={{
            textAlign: "center",
            marginBottom: "70px",
            marginTop: "90px",
          }}
        >
          {t("h1_title")}
        </h1>
        <div className='main-page-columns w-row'>
          {t("rtl") === "no" ? (
            <>
              <div className='w-col w-col-8'>
                <p
                  className='main-page-primary-text'
                  style={{ lineHeight: "50px", textIndent: "50px" }}
                >
                  {t("p1")}
                </p>
                <p
                  className='main-page-primary-text'
                  style={{ lineHeight: "50px", textIndent: "50px" }}
                >
                  {t("p2")}
                </p>
              </div>
              <div className='w-col w-col-4'>
                <Generator />
              </div>{" "}
            </>
          ) : (
            <>
              <div className='w-col w-col-4'>
                <Generator />
              </div>{" "}
              <div className='w-col w-col-8'>
                <p
                  className='main-page-primary-text'
                  style={{ lineHeight: "50px", textIndent: "50px" }}
                >
                  {t("p1")}
                </p>
                <p
                  className='main-page-primary-text'
                  style={{ lineHeight: "50px", textIndent: "50px" }}
                >
                  {t("p2")}
                </p>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default PasswordGeneratorComponent;
