import Image from "next/image";

interface CloudLogoProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

export default function CloudLogo({
  className = "w-9 h-auto",
  size = 36,
  priority = false
}: CloudLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/brand/cloud-consultancy-icon.png"
        alt="Cloud Consultancy Logo"
        width={Math.round(size * 1.5)}
        height={size}
        priority={priority}
        className="object-contain w-full h-auto drop-shadow-2xs"
      />
    </div>
  );
}
