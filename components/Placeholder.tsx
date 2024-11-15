'use client';

interface PlaceholderProps {
  width?: string;
  height?: string;
  text?: string;
  className?: string;
}

const Placeholder = ({ 
  width = "100%", 
  height = "300px", 
  text = "Image Loading...",
  className = ""
}: PlaceholderProps) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse ${className}`}
      style={{ width, height }}
    >
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};

export default Placeholder; 