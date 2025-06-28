
import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find Us Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve the Osasco area and surrounding regions. 
            Contact us to see if we service your location.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-red-100 rounded-xl h-96 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">
                    Map integration available<br />
                    Contact us for exact service areas
                  </p>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Area</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Primary Location</h4>
                      <p className="text-gray-600">Rua Exemplo, 123 - Centro<br />Osasco - SP, 06000-000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Coverage Area</h4>
                      <p className="text-gray-600">Greater São Paulo Region<br />Including surrounding municipalities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
