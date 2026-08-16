import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import CartoonGirl1 from '@/components/CartoonGirl1';
import CartoonGirl2 from '@/components/CartoonGirl2';
import CartoonGirl3 from '@/components/CartoonGirl3';

const CleaningPros = () => {
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "✨ Let's Get Cleaning!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };
  
  const services = [
    { name: "Home Cleaning", description: "A complete top-to-bottom clean for a sparkling home." },
    { name: "Office Cleaning", description: "Keep your workspace tidy and productive for your team." },
    { name: "Deep Cleaning", description: "An intensive clean for a fresh start and a healthier space." },
    { name: "Move-In/Out", description: "We handle the mess so you can focus on your move." },
  ];

  const teamMembers = [
    {
      component: CartoonGirl1,
      name: "Sarah",
      role: "Home Specialist",
      color: "text-cyan-600",
      delay: 0.1
    },
    {
      component: CartoonGirl2,
      name: "Emma",
      role: "Office Expert",
      color: "text-orange-600",
      delay: 0.2
    },
    {
      component: CartoonGirl3,
      name: "Olivia",
      role: "Deep Clean Pro",
      color: "text-purple-600",
      delay: 0.3
    }
  ];

  // Console logging for debugging
  console.log('🎨 Team Members Array:', teamMembers);
  console.log('✅ Total Characters to Render:', teamMembers.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 font-['Poppins']">
      {/* Header */}
      <header className="py-6 px-4 sm:px-8 flex justify-between items-center">
        <div className="text-2xl font-['Dancing_Script'] font-bold text-gray-700">The Cleaning Pros</div>
        <Button onClick={handleBookNow} className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
          Book Now
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img src="https://horizons-cdn.hostinger.com/70992e90-24d3-4bad-a438-69be23a99db0/5a3853b3edeccf35ca38eb1ac54937a1.png" alt="The Cleaning Pros Logo" className="w-full max-w-sm md:max-w-md mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide uppercase">
            WE MAKE EVERYTHING <span className="text-pink-500">SHINE</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">Your trusted cleaning experts since 2019.</p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
          >
            <Button
              size="lg"
              onClick={handleBookNow}
              className="mt-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold rounded-full text-lg px-8 py-6 shadow-xl transition-transform transform hover:scale-105"
            >
              Get a Free Estimate!
            </Button>
          </motion.div>
        </motion.div>
      </main>

      {/* Cartoon Characters Section - OPTIMIZED FOR ALL THREE CHARACTERS */}
      <section className="py-16 bg-white/50 overflow-visible">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Your friendly cleaning professionals ready to make your space sparkle</p>
          </motion.div>
          
          {/* Grid Layout for All Three Characters - Ensures Equal Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto place-items-center">
            {teamMembers.map((member, index) => {
              const CharacterComponent = member.component;
              
              console.log(`🎭 Rendering Character ${index + 1}:`, member.name);
              
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: member.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="w-full max-w-[300px] sm:max-w-[280px] md:max-w-[260px] lg:max-w-[280px]"
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <CharacterComponent className="w-full drop-shadow-lg" />
                    </motion.div>
                    
                    {/* Decorative circle behind character */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full -z-10"
                      style={{
                        background: index === 0 
                          ? 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0) 70%)'
                          : index === 1
                          ? 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, rgba(249,115,22,0) 70%)'
                          : 'radial-gradient(circle, rgba(192,132,252,0.1) 0%, rgba(192,132,252,0) 70%)'
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: member.delay + 0.3 }}
                    className="text-center mt-6"
                  >
                    <p className={`font-bold ${member.color} text-xl mb-1`}>{member.name}</p>
                    <p className="text-gray-500 text-sm font-medium">{member.role}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Team Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12 text-gray-600 italic text-lg"
          >
            "Together, we bring sparkle and shine to every corner!"
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Our Services</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">From a quick touch-up to a deep clean, we have the perfect service to make your space sparkle.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pink-50/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-white">
                    <Sparkles/>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-['Dancing_Script'] text-3xl font-bold">The Cleaning Pros</p>
          <p className="mt-2 text-gray-400">Making the world shine, one space at a time.</p>
          <div className="mt-6 flex justify-center items-center gap-6">
             <a href="tel:555-123-4567" className="flex items-center gap-2 text-pink-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
             </a>
             <a href="mailto:hello@cleaningpros.com" className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>hello@cleaningpros.com</span>
             </a>
          </div>
          <p className="mt-8 text-sm text-gray-500">&copy; 2025 The Cleaning Pros. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CleaningPros;