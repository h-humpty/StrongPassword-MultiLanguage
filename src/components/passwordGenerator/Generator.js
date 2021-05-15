import React, { useEffect, useState, useRef } from "react";
import "./generator.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generator = (props) => {
  toast.configure();

  const numbers = "0123456789";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLettters = "abcdefghijklmnopqrstuvwxyz";
  const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const copyBtn = useRef();

  const handleGeneratePassword = (e) => {
    if (passwordLength > 30 || passwordLength < 16) {
      debugger;
      notify("Your password length must be between 16 and 30 ", true);

      return;
    }
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      debugger;
      notify("You must select at least one option", true);

      return;
    }

    let characterList = "";

    if (includeLowercase) {
      characterList += lowerCaseLettters;
    }

    if (includeUppercase) {
      characterList += upperCaseLetters;
    }

    if (includeNumbers) {
      characterList += numbers;
    }

    if (includeSymbols) {
      characterList += specialCharacters;
    }

    setPassword(createPassword(characterList));
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = getRandomIndex(characterListLength);
      password += characterList.charAt(characterIndex);
    }

    return password;
  };

  const getRandomIndex = (limit) => {
    return Math.round(Math.random() * limit);
  };

  useEffect(() => {
    handleGeneratePassword();
  }, []);

  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();

    copyBtn.current.disabled = true;
    setTimeout(() => {
      copyBtn.current.disabled = false;
    }, 3000);
  };

  const notify = (message, hasError = false) => {
    const toastMessageOptions = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    };

    if (hasError) {
      toast.error(message, toastMessageOptions);
    } else {
      toast(message, toastMessageOptions);
    }
  };

  const handleCopyPassword = (e) => {
    copyToClipboard();
    notify("Password successfully copied to clipboard");
  };
  return (
    <>
      <div className='m-container m-containerGen'>
        <div className='m-generator'>
          <h2 className='m-generator__header'>Password Generator</h2>

          <div className='m-generator__password'>
            {password}
            <button
              className='m-generator__passwordGenerateBtn'
              onClick={handleCopyPassword}
              ref={copyBtn}
            >
              <svg
                className='clipboard-icon'
                aria-hidden='true'
                focusable='false'
                data-prefix='far'
                data-icon='clipboard'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 384 512'
              >
                <path
                  fill='currentColor'
                  d='M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z'
                ></path>
              </svg>
            </button>
          </div>

          <div className='form-group'>
            <label htmlFor='password-length'>Password length</label>
            <input
              style={{ color: "#000" }}
              name='password-length'
              id='password-length'
              type='number'
              max='30'
              min='16'
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='uppercase-letters'>Include uppercase letters</label>
            <input
              id='uppercase-letters'
              name='uppercase-letters'
              type='checkbox'
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='lowercase-letters'>Include lowercase letters</label>
            <input
              id='lowercase-letters'
              name='lowercase-letters'
              type='checkbox'
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-numbers'>Include Numbers</label>
            <input
              id='include-numbers'
              name='include-numbers'
              type='checkbox'
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-symbols'>Include Symbols</label>
            <input
              id='include-symbols'
              name='include-symbols'
              type='checkbox'
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>

          <button className='m-generator__btn' onClick={handleGeneratePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
};
export default Generator;
