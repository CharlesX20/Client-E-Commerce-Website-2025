import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

import { useEffect } from "react";
import { useUserStore } from "./stores/useUserStore";
import LoadingSpinner from "./components/LoadingSpinner";

import Navbar from "./components/Navbar";
function App() {

  const { user, checkAuth, checkingAuth } = useUserStore();

  useEffect(() => {
		checkAuth();
	}, [checkAuth]);

  if (checkingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
       {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            {/* Main warm yellow radial (bright center -> warm edges) */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full
                        bg-[radial-gradient(ellipse_at_top,rgba(255,235,59,0.95)_0%,rgba(255,205,65,0.70)_30%,rgba(255,148,88,0.30)_60%,rgba(0,0,0,0.04)_100%)]"
            />
            {/* Soft red conic highlight for dramatic accents */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-screen
                        bg-[conic-gradient(from_200deg_at_70%_30%,rgba(255,90,90,0.14),transparent_25%)] blur-[28px]"
            />
            {/* Gentle vignette to ground the composition */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/6" />
          </div>
        </div>
      <div className="relative z-50 pt-20">

      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to='/' />} />
				<Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
      </div>
      
    </div>
    
  );
}

export default App
