import { motion } from 'framer-motion';
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
      className="pokemon-card"
    >
      <span className="pokemon-id" style={{ zIndex: 1 }}>
        #{props.id.toString().padStart(3, '0')}
      </span>

      <motion.div
        className="pokemon-image-container"
        style={{ zIndex: 2 }}
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
            className="pokemon-image"
          /> 
        ) : (
          <div className="missing-image-container">
            <p className="missing-image-text">Données manquantes</p>
          </div>
        )}
      </motion.div>

      <motion.div 
        className="pokemon-shadow"
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

      <h2 className="pokemon-name">
        {props.name}
      </h2>

      {props.onDelete && (
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
          whileTap={{ scale: 0.9 }}
          className="mt-auto px-4 py-2 bg-red-600/80 text-white rounded-md w-full 
          border border-red-500/30 font-mono text-sm"
          onClick={props.onDelete}
        >
          SUPPRIMER
        </motion.button>
      )}
    </motion.div>
  );
};
