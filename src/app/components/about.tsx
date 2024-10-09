import Link from "next/link"

export default function About() {
    return (
      <div className="h-screen flex items-center justify-center px-7">
        {/* Left side text */}
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-semibold mb-4">Beautiful Nature Scene</h2>
          <p className="text-lg text-gray-600">
            This stunning landscape captures the essence of nature's beauty, with lush greenery and serene surroundings. It's a perfect escape to tranquility and relaxation.
          </p>
        </div>
  
        {/* Right side image with border */}
        <div className="w-1/2 flex justify-center ">
          <img 
            src="/img/images.jpg" 
            alt="Beautiful Nature Scene" 
            width={500} 
            height={300} 
            className="object-cover p-1 border-8 border-fuchsia-400 rounded-3xl"
          />
         
        </div>
      </div>
    );
  }
  
  