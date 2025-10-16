const IconSupport = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" />
    <path d="M19 14.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 1 0 0 9" />
    <path d="M14 14.5V22" />
    <path d="M10 14.5V22" />
    <path d="m8 22 4-3 4 3" />
  </svg>
);
export default IconSupport;
