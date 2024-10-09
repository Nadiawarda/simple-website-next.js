import Link from "next/link"

export default function Cards() {
    const cards = [
      {
        title: 'Card 1',
        description: 'Beautiful Nature Image.',
        image: '/img/image1.jpg',
      },
      {
        title: 'Card 2',
        description: 'Beautiful Nature Image.',
        image: '/img/image2.jpg',
      },
      {
        title: 'Card 3',
        description: 'Beautiful Nature Image.',
        image: '/img/image3.jpg',
      },
      {
        title: 'Card 4',
        description: 'Beautiful Nature Image.',
        image: '/img/image4.webp',
      },
      {
        title: 'Card 5',
        description: 'Beautiful Nature Image.',
        image: '/img/image 5.png',
      },
      {
        title: 'Card 6',
        description: 'Beautiful Nature Image.',
        image: '/img/image6.jpg',
      },
    ];
  

    return (
        <section className="py-16 ">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Featured Cards</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-64 object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-50"
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
            <p className="text-gray-300 mb-4 text-center">{card.description}</p>
            <a
              href="#"
              className="text-blue-500 font-medium p-2 bg-rose-100 rounded-full hover:text-blue-800"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
    );
  }
  