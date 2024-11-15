'use client';

interface PlaceholderImageProps {
  width?: string;
  height?: string;
  text?: string;
  className?: string;
}

const PlaceholderImage = ({ 
  width = "100%", 
  height = "400px", 
  text = "Image Loading...",
  className = ""
}: PlaceholderImageProps) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 ${className}`}
      style={{ width, height }}
    >
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};

export default PlaceholderImage; 