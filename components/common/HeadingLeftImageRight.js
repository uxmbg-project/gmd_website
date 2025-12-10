
const HeadingLeftImageRight = ({ heading, content, image, alt }) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-8">
        
        {/* Left: Heading + Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            {heading}
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            {content}
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={image} 
            alt={alt || heading} 
            className="max-w-full h-auto rounded-lg"
          />
        </div>

      </div>
    </section>
  )
}

export default HeadingLeftImageRight
