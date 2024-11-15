const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            What is Arktifact Chronicles?
          </span>
        </h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Arktifact Chronicles is a digital journey that spans humanity's history, capturing key moments, 
          inventions, and values through eight unique ages. Each Arktifact holds a story of courage, 
          knowledge, resilience, and unity.
        </p>
        <div className="flex justify-center">
          <a 
            href="https://opensea.io/collection/arktifact"
            className="px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg"
          >
            Collect Your Arktifacts
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 