
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001F3F] pt-24 pb-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="mb-8">
              <h2 className="serif text-2xl font-bold tracking-tight">AMELIA BRESLIN</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium">The Radnor Realtor</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Providing unrivaled expertise and personalized concierge service to the Philadelphia Main Line. A member of the elite William Holder Realty Team.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="serif text-xl mb-8">Neighborhoods</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Radnor Township</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Wayne & St. Davids</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Villanova Estates</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Bryn Mawr Moderns</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Haverford Collection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Advanced Search</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Buying Concierge</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Selling Strategy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Client Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl mb-8">Contact Amelia</h4>
            <ul className="space-y-6 text-sm text-gray-400 font-light">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#D4AF37] mr-4 shrink-0" />
                <span>123 Main Line Blvd, <br /> Radnor, PA 19087</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#D4AF37] mr-4 shrink-0" />
                <span>(610) 555-0198</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#D4AF37] mr-4 shrink-0" />
                <span>amelia@holderrealty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 font-bold">
           <p>© 2024 Amelia Breslin. The William Holder Realty Team.</p>
           <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Equal Housing Opportunity</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
