import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function ParallaxSection() {
  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      bgImageAlt="Coding background"
      strength={200}
    >
      <div className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <motion.h2 
              className="text-4xl font-bold mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                textShadow: [
                  "0 0 0px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 0px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Transform Your Future with Technology
            </motion.h2>
            <motion.p 
              className="text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Join thousands of successful graduates who have launched their tech careers through our comprehensive programs
            </motion.p>
          </FadeIn>
        </div>
      </div>
    </Parallax>
  );
}