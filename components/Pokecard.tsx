import { motion } from 'framer-motion';
import { useTeam } from '../contexts/teamContext';
import '../styles/pokecard.css';

type PokecardProps = {
  id: number;
  name: string;
  image: string | null;
  slug?: string;
}

export const Pokecard = (props: PokecardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05
        }
      }}
      transition={{ duration: 0.3 }}
      className="relative p-4 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-xl transition-all w-[200px] flex flex-col items-center gap-4"
    >
      <span className="absolute top-2 left-2 text-sm font-mono text-gray-400">
        #{props.id.toString().padStart(3, '0')}
      </span>

      <motion.div
        className="relative w-40 h-40 flex items-center justify-center"
        initial={{ y: 0, scale: 1 }}
        animate={{ y: 0, scale: 1 }}
        variants={{
          hover: {
            y: [0, -8, 0],
            scale: 1.05,
            transition: { 
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              },
              scale: {
                duration: 0.3
              }
            }
          }
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        {props.image ? (
          <motion.img 
            src={props.image} 
            alt={props.name}
            className="w-full h-full object-contain drop-shadow-lg [image-rendering:pixelated]"
          /> 
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700/50 rounded-lg">
            <p className="text-gray-400 text-sm">Données manquantes</p>
          </div>
        )}
      </motion.div>

      <motion.div 
        className="absolute bottom-16 w-24 h-2 bg-black/20 rounded-full blur-sm"
        style={{ transformOrigin: 'center' }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 1 }}
        variants={{
          hover: {
            scaleX: [1, 0.6, 1],
            transition: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      />

      <h2 className="text-lg font-semibold text-gray-200 mt-2">
        {props.name}
      </h2>
    </motion.div>
  );
};