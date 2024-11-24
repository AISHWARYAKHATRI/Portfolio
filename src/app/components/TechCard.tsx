import Image from "next/image";

interface TechCardProps {
  name: string;
  color: string;
  logo: string; // Path to the image or URL
}

const TechCard: React.FC<TechCardProps> = ({ name, color, logo }) => (
  <div
    className={`min-w-20 h-40 flex ${color} bg-opacity-35 shadow-lg rounded-xl items-center justify-center`}
  >
    <div className="relative w-16 h-10">
      <Image
        src={logo}
        alt={name}
        layout="fill"
        objectFit="contain"
        priority={false} // Set to true for images above the fold
      />
    </div>
  </div>
);

export default TechCard;
