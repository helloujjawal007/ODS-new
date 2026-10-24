interface CloudLogoProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

export default function CloudLogo({
  className = "w-8 h-8",
  size = 32
}: CloudLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xs"
        aria-hidden="true"
      >
        <path
          d="M27.5 18.2C27 13.9 23.3 10.5 18.8 10.5C15.2 10.5 12.1 12.7 10.8 15.9C7.1 16.5 4.3 19.6 4.3 23.4C4.3 27.6 7.7 31 11.9 31H27C30.3 31 33 28.3 33 25C33 21.8 30.5 19 27.5 18.2Z"
          fill="url(#ccLogoGrad)"
        />
        <defs>
          <linearGradient
            id="ccLogoGrad"
            x1="4.3"
            y1="10.5"
            x2="33"
            y2="31"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563EB" />
            <stop offset="0.6" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
