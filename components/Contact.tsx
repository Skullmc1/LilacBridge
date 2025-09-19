'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(formRef.current,
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div ref={infoRef} className="space-y-8">
            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-700">hello@javiru.dev</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-700">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}