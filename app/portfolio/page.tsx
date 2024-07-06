import {
  introData,
  skillsData,
  sliderData,
  companyData,
  socialData,
} from "@/public/data/home";
import React from "react";
import Company from "../components/Company";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Slider from "../components/Slider";
import Social from "../components/Social";
import Collapse from "./_components/Collapse";

const Portfolio = () => {
  return (
    <main className="container mx-auto px-0 main-frontend bg-smooth">
      <section className="container-fluid brand-section px-lg-5">
        <div className="row justify-content-center">
          <h3 className="col-auto color-theme">
            I am <b>Mohammad Esmaeilpour</b> My perspective on website
            development
          </h3>
          <h1 className="col-12 text-center mb-lg-0 px-0">
            web Development with <br />
            <strong>
              <strong>Mohammad Esmaeilpour</strong>
            </strong>
          </h1>
          <a className="contact-us-btn mx-auto" href="#react-project">
            React Project
          </a>
        </div>

        <div className="slidewhow-wrapper">
          <div className="slideshow">
            <div>
              <svg
                width={55}
                height={55}
                xmlns="http://www.w3.org/2000/svg"
                aria-label="JavaScript"
                role="img"
                viewBox="0 0 512 512"
              >
                <rect width="512" height="512" rx="15%" fill="#f7df1e" />
                <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
              </svg>
            </div>
            <div>
              <svg
                width={55}
                height={55}
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z"
                  fill="#563D7C"
                />
                <path
                  d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z"
                  fill="#FFF"
                />
              </svg>
            </div>
            <div>
              <svg
                width={55}
                height={55}
                viewBox="0 0 256 244"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                  fill="#764ABC"
                />
              </svg>
            </div>
            <div>
              <svg
                width={55}
                height={55}
                viewBox="175.7 78 490.6 436.9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#61dafb">
                  <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                  <circle cx="420.9" cy="296.5" r="45.7" />
                </g>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2500 560"
                width={55}
                height={55}
              >
                <path
                  d="M370,39.7h98.5V321q0,30.9-11,55.7a125,125,0,0,1-30.1,42.2,133.81,133.81,0,0,1-44.8,27,161.63,161.63,0,0,1-55.5,9.3q-30.9,0-56.9-7.6c-17.3-5.3-32.2-13.1-44.8-23.7a111.4,111.4,0,0,1-29.3-40.3c-6.9-16.3-10.4-35.7-10.4-58h99.1c0,10.5.9,19.2,2.8,26.2,1.9,6.8,4.6,12.2,8.2,16.3a29.67,29.67,0,0,0,13.2,8.4,58.89,58.89,0,0,0,18,2.5c13.7,0,24.2-5.1,31.5-15.2,7.5-10.3,11.3-24.7,11.3-43.1,0.2,0.3.2-281,.2-281"
                  transform="translate(0.1 0)"
                />
                <path
                  d="M742.4,340.7a48.88,48.88,0,0,0-2.8-17.2c-1.7-5.3-5.2-10.1-10.4-14.6q-7.95-7.05-22.2-13.8t-37.2-14.4a557.72,557.72,0,0,1-52.1-20.3,209.22,209.22,0,0,1-44.5-26.7,125.89,125.89,0,0,1-31.3-36c-7.7-13.9-11.5-30-11.5-48.4,0-17.6,3.9-33.5,11.8-47.6a108.42,108.42,0,0,1,32.9-36.3q21.15-14.85,49.8-23.1A233.83,233.83,0,0,1,688,34.1q33.45,0,61.7,9c18.8,6,34.9,14.6,48.4,25.6A115.85,115.85,0,0,1,829.6,109c7.7,15.6,11.5,33,11.5,52.4H742.6a57.38,57.38,0,0,0-3.7-21.1,39.74,39.74,0,0,0-10.7-16.6,48,48,0,0,0-17.7-11c-6.9-2.6-15.2-3.9-24.8-3.9a81.27,81.27,0,0,0-24.8,3.4,52.44,52.44,0,0,0-18,9,38.31,38.31,0,0,0-10.7,13.2,35.31,35.31,0,0,0-3.7,15.8,29.74,29.74,0,0,0,5.1,16.9,63.48,63.48,0,0,0,14.9,14.1,165.56,165.56,0,0,0,23.6,12.4c9.4,3.8,19.9,7.5,31.5,11.3A407,407,0,0,1,761.9,228c17.1,8.4,31.4,18.1,43.1,29a110.22,110.22,0,0,1,26.7,36.9q9.3,20.55,9.3,46.5,0,27.6-11,49.3a98.31,98.31,0,0,1-30.7,36q-19.65,14.7-47.9,22.2-27.9,7.65-62.2,7.6a236.75,236.75,0,0,1-42-3.7,204.91,204.91,0,0,1-40-10.7,189,189,0,0,1-35.5-18.3,126.54,126.54,0,0,1-28.4-26.7,129.14,129.14,0,0,1-18.9-35.2c-4.5-13.1-6.8-27.8-6.8-43.9h99.1c0,12,1.6,22.1,4.8,30.4a47.5,47.5,0,0,0,14.1,19.7,57.79,57.79,0,0,0,22.5,11,137.15,137.15,0,0,0,31,3.1c9.4,0,17.4-1,23.9-3.1a52.85,52.85,0,0,0,16.6-8.7,33.32,33.32,0,0,0,9.3-13,34.89,34.89,0,0,0,3.5-15.7"
                  transform="translate(0.1 0)"
                />
                <path
                  d="M1239.7,253.1q0,46.95-13.2,84.5t-37.2,63.6a159.76,159.76,0,0,1-56.6,40.3q-32.7,13.8-71.8,13.8-39.75,0-72.9-13.8a162.69,162.69,0,0,1-56.9-40.3Q907.4,375,894.2,337.6c-8.8-25-13.2-53.1-13.2-84.5V236.5q0-47,13-84.5,13.2-37.5,36.9-63.6a162.69,162.69,0,0,1,56.9-40.3q33-14.1,72.6-14.1,39.15,0,72.1,14.1a159.76,159.76,0,0,1,56.6,40.3c16,17.5,28.3,38.7,37.2,63.6s13.5,53.1,13.5,84.5l-0.1,16.6m-100.6-17.2q0-61-20.6-92.6-20.25-31.8-58.3-31.8-39.75,0-59.4,31.8c-13,21-19.4,51.9-19.4,92.6v17.2c0,40.2,6.7,71,20,92.6s33.1,32.4,59.4,32.4q37.8,0,58-32.1,20.25-32.4,20.3-92.9V235.9"
                  transform="translate(0.1 0)"
                />
                <path
                  d="M1632.4,449.6h-98.3L1388.8,194.5V449.6H1290V39.7h98.8l145,255.1V39.7h98.5V449.6h0.1"
                  transform="translate(0.1 0)"
                />
                <path
                  d="M1866.4,249.2l25.1-209.5H2131v73.8H1968.5l-9.3,81.4q3.45-2,9.3-4.5a109.34,109.34,0,0,1,13.8-4.8,107.15,107.15,0,0,1,16.9-3.9,104.61,104.61,0,0,1,18.9-1.7q30.45,0,54.1,9.3a101,101,0,0,1,39.7,26.7q16,17.4,24.5,43.1t8.4,58.6a153.43,153.43,0,0,1-8.7,51.2,127.25,127.25,0,0,1-25.9,44.2c-11.6,12.8-26.4,23-44.2,30.7s-38.9,11.5-63.3,11.5a175.32,175.32,0,0,1-53.8-8.4,149.65,149.65,0,0,1-46.2-24.2,124,124,0,0,1-32.4-38.6q-12.15-22.5-11.8-51h95.2c0.9,15,5.7,26.9,14.4,35.8s20,13.2,34.1,13.2c9.4,0,17.2-1.9,23.4-5.6a40.2,40.2,0,0,0,14.6-15.2,64.57,64.57,0,0,0,7.6-22.8,158.69,158.69,0,0,0,2.3-27.3,100,100,0,0,0-3.4-27.3,55.6,55.6,0,0,0-10.4-20.6,45.37,45.37,0,0,0-18.3-12.9c-7.3-3.2-16.1-4.8-26.5-4.8a78.28,78.28,0,0,0-18.3,2,66.64,66.64,0,0,0-14.1,5.1,48.64,48.64,0,0,0-10.1,7,47.25,47.25,0,0,0-7,7.3l-75.6-17.8"
                  transform="translate(0.1 0)"
                />
                <path
                  d="M147,551c-19.3-5.4-35.5-12.6-48.4-21.4a118,118,0,0,1-31.3-30.4A111.18,111.18,0,0,1,50.4,462a180.1,180.1,0,0,1-4.8-42.2V362.6a84.76,84.76,0,0,0-2.8-22.8,43.7,43.7,0,0,0-8.2-17.2,35.77,35.77,0,0,0-14.1-11.3c-5.6-2.6-12.5-3.9-20.6-3.9V243.5c16,0,27.5-5,34.6-14.9,7.3-10.1,11-23.7,11-40.5V130.9a180.1,180.1,0,0,1,4.8-42.2A112.08,112.08,0,0,1,67.2,51.5,117,117,0,0,1,98.5,21.4c13-8.8,29.1-16,48.4-21.4l17.7,49.6a45.11,45.11,0,0,0-18,12.1,64.28,64.28,0,0,0-11.3,18.6,93.18,93.18,0,0,0-5.9,23.4,215.07,215.07,0,0,0-1.7,27.3v57.2q0,28.2-12.4,51T75.6,275.5q27.3,13.5,39.7,36.6,12.45,22.8,12.4,50.7V420a215.07,215.07,0,0,0,1.7,27.3,95.44,95.44,0,0,0,5.9,23.4,62.17,62.17,0,0,0,11.3,18.6,45.11,45.11,0,0,0,18,12.1c0.1-.2-17.6,49.6-17.6,49.6"
                  transform="translate(0.1 0)"
                  fill="#999"
                />
                <path
                  d="M1696.6,405.2a47.56,47.56,0,0,1,3.7-18.9,44.72,44.72,0,0,1,10.7-14.9,50.66,50.66,0,0,1,16.6-10.1,60.41,60.41,0,0,1,21.4-3.7,57.38,57.38,0,0,1,21.1,3.7,46.83,46.83,0,0,1,16.6,10.1,39.76,39.76,0,0,1,10.7,14.9,47.75,47.75,0,0,1,0,37.8,42.49,42.49,0,0,1-10.7,15.2,51.22,51.22,0,0,1-16.6,9.9,59.53,59.53,0,0,1-21.1,3.7,58.26,58.26,0,0,1-21.4-3.7,52,52,0,0,1-16.6-9.9,45.38,45.38,0,0,1-14.4-34.1m0-224.7a47.56,47.56,0,0,1,3.7-18.9,44.72,44.72,0,0,1,10.7-14.9,50.66,50.66,0,0,1,16.6-10.1,60.41,60.41,0,0,1,21.4-3.7,57.38,57.38,0,0,1,21.1,3.7,46.83,46.83,0,0,1,16.6,10.1,39.76,39.76,0,0,1,10.7,14.9,47.75,47.75,0,0,1,0,37.8,42.49,42.49,0,0,1-10.7,15.2,51.22,51.22,0,0,1-16.6,9.9,59.53,59.53,0,0,1-21.1,3.7,58.26,58.26,0,0,1-21.4-3.7,52,52,0,0,1-16.6-9.9,45.38,45.38,0,0,1-14.4-34.1"
                  transform="translate(0.1 0)"
                  fill="#999"
                />
                <path
                  d="M2288.1,438.4a134.66,134.66,0,0,1-4.5,34.3,167.33,167.33,0,0,1-12.4,32.9,173.68,173.68,0,0,1-18.6,29.8,147.84,147.84,0,0,1-22.5,24.5l-47.9-22.5c3-6.4,6.2-12.9,9.6-19.4a178.87,178.87,0,0,0,9.9-20.6,164,164,0,0,0,7.6-24.2,125.72,125.72,0,0,0,3.1-29.6V378h76l-0.3,60.4"
                  transform="translate(0.1 0)"
                  fill="#999"
                />
                <path
                  d="M2336,501.2a46.16,46.16,0,0,0,18-12.1,63,63,0,0,0,11.3-18.6,93.18,93.18,0,0,0,5.9-23.4,215.05,215.05,0,0,0,1.7-27.3V362.6q0-28.2,12.4-51t40-36.3q-27.6-13.5-40-36.3t-12.4-51V130.8a215.1,215.1,0,0,0-1.7-27.3,95.46,95.46,0,0,0-5.9-23.4A62.17,62.17,0,0,0,2354,61.5a45.11,45.11,0,0,0-18-12.1L2353.7,0c19.3,5.4,35.5,12.6,48.4,21.4a114.13,114.13,0,0,1,31.3,30.1A106.76,106.76,0,0,1,2450,88.7a170,170,0,0,1,5.1,42.2v57.2a98,98,0,0,0,2.5,23.1,53.44,53.44,0,0,0,8.2,17.5,38.27,38.27,0,0,0,14.1,11c5.8,2.6,12.8,3.9,20.8,3.9v63.9c-16.1,0-27.8,5.1-34.9,15.2-7.1,9.9-10.7,23.3-10.7,40v57.2a170,170,0,0,1-5.1,42.2,107.58,107.58,0,0,1-16.6,37.2q-11.85,17.25-31.3,30.4c-13,8.8-29.1,16-48.4,21.4L2336,501.2"
                  transform="translate(0.1 0)"
                  fill="#999"
                />
              </svg>
            </div>
            <div>
              <svg
                fill="none"
                width={55}
                height={55}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124 141.53"
              >
                <path
                  d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                  fill="#1b73ba"
                />
                <path
                  d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                  fill="#1c88c7"
                />
                <path
                  d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div>
              <svg
                fill="none"
                width={55}
                height={55}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124 141.53199999999998"
              >
                <path
                  d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                  fill="#e34f26"
                />
                <path
                  d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                  fill="#ef652a"
                />
                <path
                  d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>

        <i className="bi-mouse"></i>
      </section>

      <section className="container-fluid work-banner d-none d-lg-block">
        <div className="row pt-2 pb-5">
          <a
            href="../../projects/salam-siman/index.html"
            target="_blank"
            className="col-auto"
            data-offset-top="1"
          ></a>
          <a
            href="../../projects/abtin-azma/index.html"
            className="col-auto"
            target="_blank"
            data-offset-top="2"
          ></a>
          <a
            href="../../projects/formulist/index.html"
            className="col-auto"
            target="_blank"
            data-offset-top="3"
          ></a>
          <a
            href="../../projects/abtin-shimi/index.html"
            className="col-auto"
            target="_blank"
            data-offset-top="4"
          ></a>
          <a
            href="../../projects/sarisan/"
            className="col-auto"
            target="_blank"
            data-offset-top="5"
          ></a>
          <a
            href="../../projects/shayacell/"
            className="col-auto"
            target="_blank"
            data-offset-top="6"
          ></a>
          <a
            href="../../projects/hamy/index.html"
            className="col-auto"
            target="_blank"
            data-offset-top="7"
          ></a>
        </div>
      </section>

      <div className="container-fluid intro">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 px-0">
            <h4 className="color-theme">About Me</h4>
            <h2>I am Mohammad Esmaeilpour</h2>
            <p className="mt-4">
              Hi 👋, I am <strong> Mohammad Esmaeilpour</strong> , 23 years old.
              I am a website developer who works as a front-end developer
              (React). I am responsible for the tasks entrusted to me and eager
              to learn in this field. I have experience working in a programming
              team where I have had good experiences and I have a spirit for
              team work and I am interested in group work.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid slider">
        <div className="slider-wrapper">
          <div className="row">
            <h2>Frontend Projects</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid text-move">
        <div className="row">
          <h5>
            Frontend - Development - Creating a Web App using React, which is
            highly performance
          </h5>
          <h5>
            React Developer - React - Using a virtual DOM, React allows the site
            to load with high efficiency
          </h5>
        </div>
      </div>

      <div className="container-fluid branding-first-sec">
        <div className="px-2">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-auto col-12 order-2 order-lg-1">
              <h4 className="color-theme">JAVASCRIPT</h4>
              <h2>Web development using Vanila JavaScript</h2>
              <p className="mt-3">
                A 360° management of my project!
                <br />
                Develop a site with
                <strong>Vanila JavaScript</strong>, the ability to use
                technologies such as <b>Fetch</b>, <b>Axios</b> ... , I consider
                speed and high performance from the beginning of web
                development.
              </p>
            </div>
            <div className="col-12 col-lg-auto order-1 order-lg-2 d-flex align-items-center justify-content-center">
              <div className="img-box">
                <a
                  target="_blank"
                  href="../../projects/accordion/index.html"
                  className="little-img"
                >
                  <figure>
                    <img src="../asset/img/project/to-do-list.webp" alt="" />
                  </figure>
                </a>
                <a
                  target="_blank"
                  href="../../projects/js-tabs/inex.html"
                  className="little-img"
                >
                  <figure>
                    <img src="../asset/img/project/tabs.webp" alt="" />
                  </figure>
                </a>
                <a
                  target="_blank"
                  href="../../projects/sign-in-validate-api/index.html"
                  className="little-img"
                >
                  <figure>
                    <img
                      src="../asset/img/project/form-validate-api.webp"
                      alt=""
                    />
                  </figure>
                </a>
                <a
                  target="_blank"
                  href="../../projects/credit-card/index.html"
                  className="little-img"
                >
                  <figure>
                    <img src="../asset/img/project/credit-cart.webp" alt="" />
                  </figure>
                </a>
                <figure>
                  <img src="../asset/img/ui/javascript-vector.webp" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid branding-seccond-sec">
        <div className="row pt-5 mt-5 align-items-center justify-content-center justify-content-lg-around">
          <a
            href="../../projects/3d-room/index.html"
            target="_blank"
            className="col-lg-auto"
          >
            <figure className="brand-gif">
              <img
                src="../asset/img/project/3d-room.webp"
                alt=""
                className="w-100 h-100"
              />
            </figure>
          </a>
          <div className="col-lg-auto">
            <h4 className="color-theme">Frontend</h4>
            <h2>ّFrontend Development using HTML, CSS, Bootstrap.</h2>
            <p className="mt-3">
              Building sites using these tools increased my experience in the
              field of web development and I was able to create a many of site
              pages.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid brand-move" id="react-project">
        <div className="row align-items-center justify-content-around overflow-hidden">
          <div className="col-lg-6 order-2 order-lg-1">
            <h4 className="color-theme">React</h4>
            <h2>Building Web Applications using the React library</h2>
            <p className="mt-3">
              No template! As a <strong>React Developer</strong>, I create
              custom web app made to enhance user interface (UI) and user
              experience (UX).Easy access, based on Inpage <b>SEO</b>, whose
              rules are followed.
            </p>
          </div>
          <div
            className="col-lg justify-content-lg-end order-1 order-lg-2 d-flex align-items-center flex-column flex-lg-row"
            id="move-img"
          >
            <div className="d-flex flex-lg-column">
              <a href="../../projects/weatherApp/" target="_blank">
                <figure>
                  <img
                    src="../asset/img/project/localhost_3000_ (1).png"
                    alt=""
                    className="w-100 h-100"
                  />
                </figure>
              </a>
              <a href="../../projects/kindHeart/index.html" target="_blank">
                <figure>
                  <img
                    src="../asset/img/project/kindHeart.webp"
                    alt=""
                    className="w-100 h-100"
                  />
                </figure>
              </a>
            </div>
            <div className="d-flex flex-lg-column">
              <a href="../../projects/dog-react-web-app/" target="_blank">
                <figure>
                  <img
                    src="../asset/img/project/dog-react.webp"
                    alt=""
                    className="w-100 h-100"
                  />
                </figure>
              </a>
              <a href="../../projects/itechie-react-web-app/" target="_blank">
                <figure>
                  <img
                    src="../asset/img/project/itechie-react.webp"
                    alt=""
                    className="w-100 h-100"
                  />
                </figure>
              </a>
              <a href="../../projects/ailbaba-react-web-app/" target="_blank">
                <figure>
                  <img
                    src="../asset/img/project/alibaba-react.webp"
                    alt=""
                    className="w-100 h-100"
                  />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid branding-seccond-sec" id="customer-sec">
        <div className="row pt-5 mt-5 align-items-center justify-content-around">
          <div className="col-lg-auto m-0">
            <figure className="brand-gif">
              <img
                src="../asset/img/ui/handShake.jpg"
                alt=""
                className="w-100 h-100"
              />
            </figure>
          </div>
          <div className="col-lg-auto">
            <h4 className="color-theme">Customers</h4>
            <h2>
              Custom web development for companies as a frontend developer
            </h2>
            <p className="mt-3">
              After designing the site in Figma, it is necessary to implement
              this plan and I had the oppertunity to work with companies as a
              Frontend developer.
            </p>
          </div>
        </div>
      </div>

      <Collapse />

      <div className="container-fluid contact-us mt-5">
        <div className="row">
          <h3 className="color-dark">Lets Talk!</h3>
          <p className="color-dark mb-4">
            I am always looking for progress in my work and I welcome job
            opportunities that will improve me and the work environment
          </p>
          <a href="mailto:imohmdsmp@gmail.com" className="mx-2 contact-us-btn">
            Hire Me
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohammad-esmaeilpour-4ab401217/"
            className="mx-2 contact-us-btn"
          >
            Order Project
          </a>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
