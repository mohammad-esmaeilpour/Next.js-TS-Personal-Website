import {
  ICompany,
  IIntro,
  ISkills,
  ISlider,
  ISocial,
} from "@/app/interface/home";

// introduction
export const introData: IIntro = {
  intro: "Hi👋, welcome to my portfolio.",
  title: `Mohammad Esmaeilpour`,
};

// company data
export const companyData: Array<ICompany> = [
  {
    imgSrc: "/asset/img/project/abtin-azma.jpeg",
    link: "#",
    id: 1,
  },
  {
    imgSrc: "/asset/img/project/v-user.jpeg",
    link: "#",
    id: 2,
  },
  {
    imgSrc: "/asset/img/project/formulist.jpeg",
    link: "#",
    id: 3,
  },
  {
    imgSrc: "/asset/img/project/mr-hami.jpeg",
    link: "#",
    id: 4,
  },
  {
    imgSrc: "/asset/img/project/salam-siman.jpeg",
    link: "#",
    id: 5,
  },
  {
    imgSrc: "/asset/img/project/abr-host.jpeg",
    link: "#",
    id: 6,
  },
  {
    imgSrc: "/asset/img/project/abtin-chem.jpeg",
    link: "#",
    id: 7,
  },
];

// skills
export const skillsData: ISkills = {
  title: "My Skills",
  skills: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#00b8ff" height="20px" width="20px">
          <path d="M13.785 11.245 A1.785 1.785 0 0 1 12 13.03 A1.785 1.785 0 0 1 10.215 11.245 A1.785 1.785 0 0 1 13.785 11.245 z" />
          <path d="M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 001.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 01-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 00-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 01-.987 2.542z" />
          <path d="M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 00-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 00-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 011.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 002.021-2.477l.112-.16.194-.019a19.473 19.473 0 003.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 01-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 01-1.71 2.124z" />
          <path d="M17.58 8.695l-.395-.099a19.477 19.477 0 00-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0011.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 01-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 01-1.713-2.123 20.692 20.692 0 01-2.696-.419z" />
          <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 01-1.126-1.769 26.028 26.028 0 01-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 014.198 0l.194.019.113.16a25.136 25.136 0 012.1 3.628l.083.179-.083.177a24.742 24.742 0 01-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 001.832-3.168 23.916 23.916 0 00-1.832-3.168 23.877 23.877 0 00-3.667 0 23.743 23.743 0 00-1.832 3.168 24.82 24.82 0 001.832 3.168z" />
        </svg>
      ),
      title: "React Js",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="20px" width="20px">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z" />
        </svg>
      ),
      title: "Next Js",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#2f74c0" height="20px" width="20px">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
      ),
      title: "Typescript",
    },
    {
      icon: (
        <svg viewBox="0 0 512 512" fill="#f0dd21" height="20px" width="20px">
          <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
        </svg>
      ),
      title: "EcmaScript 5/6/7",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#a700a7" height="20px" width="20px">
          <path d="M15.661 15.549a1.315 1.315 0 001.185-1.386 1.363 1.363 0 00-1.35-1.302h-.048a1.352 1.352 0 00-1.303 1.397c.024.379.179.687.391.911-.827 1.609-2.07 2.794-3.954 3.788-1.266.663-2.604.912-3.905.734-1.089-.153-1.94-.64-2.463-1.421-.78-1.185-.852-2.462-.201-3.74a5.597 5.597 0 011.658-1.931 7.88 7.88 0 01-.331-1.218c-3.506 2.51-3.148 5.942-2.084 7.564.794 1.184 2.415 1.941 4.19 1.941.474 0 .972-.035 1.457-.154 3.077-.592 5.409-2.438 6.747-5.16l.011-.023z" />
          <path d="M19.887 12.589c-1.834-2.154-4.533-3.337-7.611-3.337h-.403c-.2-.438-.661-.711-1.183-.711h-.036c-.744 0-1.325.64-1.301 1.385.023.71.627 1.302 1.35 1.302h.059a1.332 1.332 0 001.183-.828h.439c1.824 0 3.551.532 5.126 1.574 1.206.792 2.072 1.834 2.557 3.077.425 1.019.402 2.013-.035 2.843-.675 1.302-1.812 1.988-3.314 1.988-.947 0-1.871-.296-2.345-.509-.283.235-.758.626-1.102.863 1.042.473 2.096.746 3.113.746 2.309 0 4.023-1.302 4.676-2.557.709-1.422.651-3.813-1.161-5.859l-.012.023z" />
          <path d="M7.647 15.975c.023.71.626 1.302 1.35 1.302h.048a1.334 1.334 0 001.302-1.397c0-.71-.616-1.301-1.338-1.301h-.048c-.048 0-.118 0-.178.022-.982-1.657-1.397-3.434-1.242-5.349.094-1.445.567-2.7 1.42-3.742.71-.888 2.048-1.326 2.96-1.35 2.556-.048 3.622 3.138 3.704 4.404l1.184.354C16.536 5.036 14.122 3 11.813 3 9.647 3 7.647 4.574 6.842 6.884c-1.102 3.077-.379 6.036.971 8.404-.118.154-.189.426-.166.687z" />
        </svg>
      ),
      title: "Zustand - Redux",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="orangered" height="20px" width="20px">
          <path d="M22.251 11.82a3.117 3.117 0 00-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 00-2.244 2.988 3.12 3.12 0 001.313 2.536 8.279 8.279 0 01-1.084 1.244 8.14 8.14 0 01-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 00-.91-6.08 3.117 3.117 0 00-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 005.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 002.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 01-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 011.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 00-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 01.09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 01.48 1.209 1.752 1.752 0 01-3.502 0 1.742 1.742 0 011.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 01-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 00-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 01-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 001.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 003.008-2.327h1.167a3.109 3.109 0 003.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z" />
        </svg>
      ),
      title: "Jest - ReactTesting/lib",
    },

    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#007fff" height="20px" width="20px">
          <path d="M8 16.61v-1.24l6-3.46V7.23l-5 2.89-5-2.89V13l-1 .58L2 13V5l1.07-.62L9 7.81l3.93-2.27 2-1.16L16 5v8.06L10.92 16l4.05 2.33 5.03-2.9V11l1-.58 1 .58v5.58l-7.03 4.06L8 16.61m14-6.86l-1 .58-1-.58V8.58L21 8l1 .58v1.17z" />
        </svg>
      ),
      title: "Material Ui",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#07b0ce" height="20px" width="20px">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
        </svg>
      ),
      title: "Tailwind",
    },
    {
      icon: (
        <svg viewBox="0 0 576 512" fill="#760ff0" height="20px" width="20px">
          <path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5c32.8-.1 50.9-13.3 50.9-36.9zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1C508.3 60 484.5 32 452.5 32H123.7C91.6 32 67.9 60.1 69 90.5c1 29.3-.3 67.2-9.8 98.1-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1 9.5 30.9 10.9 68.8 9.8 98.1-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5-1-29.3.3-67.2 9.8-98.1 9.6-31 25.7-50.6 52.1-53.1v-28.5c-26.3-2.5-42.5-22.1-52-53.1zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4 0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3 0 42.1-31.3 67.5-83.2 67.5zm-10-108.7h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5 0-25.7-18.6-38.9-54.5-38.9z" />
        </svg>
      ),
      title: "Bootstrap 4/5",
    },
    {
      icon: (
        <svg viewBox="0 0 640 512" fill="#c76394" height="20px" width="20px">
          <path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 00-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 00-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 006.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 00.1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0020.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 006.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0021.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 011.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z" />
        </svg>
      ),
      title: "Scss/Sass",
    },
    {
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="20px"
          width="20px"
        >
          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
        </svg>
      ),
      title: "Gitlab - Github",
    },
  ],
};

// slider
export const SliderData: ISlider = {
  subTitle: "Featured Projects",
  title: "A showcase of my latest project",
  items: [
    {
      title: "react 1",
      des: "react",
      link: "/",
      img: "/asset/img/project/3d-room.jpeg",
    },
    {
      title: "react 2",
      des: "react",
      link: "/",
      img: "/asset/img/project/3d-room.jpeg",
    },
    {
      title: "react 3",
      des: "react",
      link: "/",
      img: "/asset/img/project/3d-room.jpeg",
    },
    {
      title: "react 4",
      des: "react",
      link: "/",
      img: "/asset/img/project/3d-room.jpeg",
    },
    {
      title: "react 4",
      des: "react",
      link: "/",
      img: "/asset/img/project/3d-room.jpeg",
    },
  ],
};

export const socialData: ISocial = {
  title: "Social media",
  socialMedia: [
    {
      title: "github",
      link: "https://github.com/mohamadesmaeilpour",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="20px"
          width="20px"
        >
          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
        </svg>
      ),
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/mohammad-esmaeilpour-4ab401217/",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="20px"
          width="20px"
        >
          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
        </svg>
      ),
    },
    {
      title: "gmail",
      link: "mailto:imohmdsmp@gmail.com",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="20px"
          width="20px"
        >
          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
        </svg>
      ),
    },
    {
      title: "instagram",
      link: "https://instagram.com/mohammad.esmaeilpour.web?igshid=MzNlNGNkZWQ4Mg==",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="20px"
          width="20px"
        >
          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
        </svg>
      ),
    },
  ],
};
