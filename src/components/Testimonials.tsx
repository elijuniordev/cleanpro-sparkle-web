
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CleanPro transformed our office space completely! Their attention to detail and professionalism is unmatched. Our carpets look brand new and the entire office feels fresh and clean.",
      name: "Maria Santos",
      role: "Office Manager"
    },
    {
      quote: "I was amazed by their upholstery cleaning service. My old sofa looked hopeless, but CleanPro brought it back to life. Excellent work and very reasonable prices!",
      name: "João Silva",
      role: "Homeowner"
    },
    {
      quote: "Their car interior cleaning service is fantastic! My vehicle's seats and carpets were in terrible condition, but now they look and smell like new. Highly recommended!",
      name: "Ana Costa",
      role: "Business Owner"
    },
    {
      quote: "CleanPro's mattress cleaning service helped my family sleep better. They removed all allergens and odors professionally. Truly a game-changer for our home comfort!",
      name: "Carlos Rodrigues",
      role: "Father of Two"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our professional cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-6">
                <div className="flex text-blue-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
