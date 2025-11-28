export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 850 256"
      {...props}
    >
      <path d="M32 16h120v32H29V12ZM12 48h32v64H16V48ZM48 112h96v32H48V112ZM128 144h32v64h-30V144ZM3 198h128v32H43v-12" />
      <path d="M180 16h32v192h-32V16ZM276 16h32v192h-32V16ZM212 104h64v32h-64v-32Z" />
      <path d="M360 208h-32L392 16h40l64 192h-36l-12-40h-72l-16 40Zm36-72h52l-26-88h-2l-24 88Z" />
      <path d="M540 16h32v192h-32V16Z" />
      <path d="M620 16h32v192h-32V16ZM652 112l68-96h40l-72 96 76 96h-40l-72-96Z" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
