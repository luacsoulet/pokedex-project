import { motion } from 'framer-motion';
import pokeball from '../assets/pokeball.png';

export const Loader = () => {

  const numPokeballs = 4;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-4">
        {[...Array(numPokeballs)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ y: 0, rotateZ: 0 }}
            animate={{
              y: [-10, 0],
              rotateZ: [0, 360],
            }}
            transition={{
              y: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeOut",
                delay: index * 0.15,
              },
              rotateZ: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }
            }}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transformStyle: 'preserve-3d'
            }}
          >
            <img 
              src={pokeball} 
              alt="Loading..." 
              className="w-8 h-8 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
