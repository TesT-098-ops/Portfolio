export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 16h120v32H29V12ZM12 48h32v64H16V48ZM48 112h96v32H48V112ZM128 144h32v64h-30V144ZM3 198h128v32H43v-12" />
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><path fill="${color}" d="M32 16h120v32H29V12ZM12 48h32v64H16V48ZM48 112h96v32H48V112ZM128 144h32v64h-30V144ZM3 198h128v32H43v-12"/></svg>`;
}
