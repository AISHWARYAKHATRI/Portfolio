interface TechCardProps {
  name: string;
  color: string;
  logo: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, color, logo }) => (
  <div
    className={`min-w-20 h-40 flex ${color} bg-opacity-35 shadow-lg rounded-xl items-center justify-center`}
  >
    <a href="" target="_blank" title={name} rel="noreferrer">
      <img src={logo} alt={name} className="w-10 h-10" />
    </a>
  </div>
);

export default TechCard;
