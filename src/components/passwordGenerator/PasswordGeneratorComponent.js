import React from "react";

const PasswordGeneratorComponent = (props) => {
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
          Random Password Generator
        </h1>
        <div className='main-page-columns w-row'>
          <div className='w-col w-col-8'>
            <p
              className='main-page-primary-text'
              style={{ lineHeight: "50px", textIndent: "50px" }}
            >
              Names, birthdays, and street addresses may be easy to remember but
              they're also easily found online and should always be avoided in
              passwords to ensure the greatest strength. Make sure your
              passwords are at least 12 characters long and contain letters,
              numbers, and special characters.
            </p>
            <p
              className='main-page-primary-text'
              style={{ lineHeight: "50px", textIndent: "50px" }}
            >
              All passwords you create with the DataLeakChecker Password
              Generator are generated locally, on your computer. They are not
              saved or shared anywhere else.
            </p>
          </div>
          <div className='w-col w-col-4'></div>
        </div>
      </div>
    </>
  );
};
export default PasswordGeneratorComponent;
