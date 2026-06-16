import Image from "next/image";

export default function Logo({
  className = "",
  width = 180,
  height = 66,
  invert = false
}: {
  className?: string;
  width?: number;
  height?: number;
  invert?: boolean;
}) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="CreditU Technologies Pvt Ltd"
        width={width}
        height={height}
        priority
        style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </div>
  );
}
