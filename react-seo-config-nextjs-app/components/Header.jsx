import {motion} from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.7,
        ease: 'linear',
      }}
    ></motion.header>
  );
};

export default Header;
