import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';


const AuthModal = () => {
    return (
      <div className="fixed bg-opacity-50 bg-black flex justify-center items-center w-screen h-screen top-0 left-0 z-50">

          {/* Modal Block */}
          <div className="rounded-2xl w-96 bg-white">

            <div className="flex justify-center items-center py-2">
              <button className="border-b-4 border-primary text-xl py-4 px-5">LOGIN</button>
              <button className="border-b-4 border-transparent text-xl py-4 px-5">REGISTER</button>
            </div>

            {/* Login Div & Register Screen */}
            <RegisterScreen />

          </div>

      </div>
    )
  }
  
  export default AuthModal