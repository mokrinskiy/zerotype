import { motion } from "framer-motion";

const Caret = () => {
    return (
        <motion.div
            aria-hidden={true}
            className="inline-block w-0.5 h-5 max-md:h-3 bg-primary"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        />
    );
};

export default Caret;
