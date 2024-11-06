import { useContext, useState } from "react";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import TabButton from "./components/TabButton";
import * as motion from "framer-motion/client";
import "./styles/style.css";
import { AuthModalContext } from "@/app/contexts/authModalContext";

const AuthModal = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const toggleLogin = () => {
    setIsNewUser(false);
  };
  const toggleRegister = () => {
    setIsNewUser(true);
  };
  const stopPropagation = (e) => e.stopPropagation();

  const { isAuthModal, setIsAuthModal } = useContext(AuthModalContext);
  const modalCondition = isAuthModal ? "fixed" : "hidden";

  // Closes Modal
  const closeModal = () => setIsAuthModal(false);

  return (
    <div className={`authModal ${modalCondition}`} onClick={closeModal}>
      {/* Modal Block */}
      <div className="rounded-2xl w-full bg-white mx-2 xs:mx-8 md:mx-16 lg:mx-96">
        <div
          className="flex justify-center items-center py-2"
          onClick={stopPropagation}
        >
          <TabButton isSelected={!isNewUser} onClick={toggleLogin}>
            LOGIN
          </TabButton>
          <TabButton isSelected={isNewUser} onClick={toggleRegister}>
            REGISTER
          </TabButton>
        </div>

        {/* Login Div & Register Screen */}
        <motion.div
          key={isNewUser}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={stopPropagation}
        >
          {isNewUser ? <RegisterScreen /> : <LoginScreen />}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthModal;
