import TestimonialsData from "../assets/testimonial.json";

function Testmonials() {
  return (
    <div className="p-6 lg:p-12 bg-gray-50">
      <div className="text-center text-3xl mt-16 text-gray-600 font-semibold ">
        <h1>My Happy Clients</h1>
      </div>
      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-8 w-full bg-white py-8 px-4 rounded-3xl shadow-lg">
        {TestimonialsData.map((client) => (
          <div
            key={client.id}
            className="rounded-xl shadow-md p-6 bg-white transition-transform transform hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Top */}
            <div className="flex items-center mb-4">
              <img
                src={client.img}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                alt={client.name}
              />
              <div className="ml-4">
                <a
                  href={client.link}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors"
                >
                  {client.name}
                </a>
                <p className="text-gray-400 text-sm">{client.nickname}</p>
              </div>
            </div>
            {/* Bottom */}
            <div>
              <p className="text-gray-600 italic">{client.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testmonials;
