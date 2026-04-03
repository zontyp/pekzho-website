import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

type UserType = {
  name: string;
  email: string;
  photo: string;
};

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("googleUser");
    if (savedUser) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLoginSuccess = (user: UserType) => {
    localStorage.setItem("googleUser", JSON.stringify(user));
    navigate("/", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffaf2] px-4">
      <div className="w-full max-w-md rounded-3xl border border-[#ead7b0] bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <img
            src="/pekzho-logo.png"
            alt="Pekzho logo"
            className="mx-auto mb-4 h-16 w-auto"
          />
          <h1 className="text-3xl font-bold text-[#895a06]">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Please login to access Pekzho website
          </p>
        </div>

        <div className="flex justify-center">
          <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  );
}

export default Login;