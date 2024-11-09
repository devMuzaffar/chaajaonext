import { animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimateNumbers = ({ numbers }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationControls = animate(0, numbers, {
      duration: 1,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => animationControls.stop();
  }, []);

  return <span>{count.toLocaleString()}</span>;
};

export default AnimateNumbers;
