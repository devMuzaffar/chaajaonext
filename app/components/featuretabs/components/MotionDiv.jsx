import * as motion from "framer-motion/client"

const MotionDiv = ({children, value}) => {
  return (
    <motion.div
          key={value} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} 
        >
            {children}
        </motion.div>
  )
}

export default MotionDiv