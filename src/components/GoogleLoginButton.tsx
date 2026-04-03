import { useEffect, useRef, useCallback } from "react";
import axios from "axios";

function GoogleLoginButton({ onLoginSuccess }) {
  const buttonRef = useRef(null);

  const handleCredentialResponse = useCallback(
    async (response) => {
      console.log("Google response:", response);
console.log("Credential token:", response.credential);
      try {
        const res = await axios.post("http://localhost:5000/auth/google", {
          credential: response.credential,
        });

        if (res.data.success) {
          onLoginSuccess(res.data.user);
          localStorage.setItem("googleUser", JSON.stringify(res.data.user));
          alert("Login successful!");
        }
      } catch (error) {
        console.error("Google Login Error:", error.response?.data || error.message);
        alert("Login failed");
      }
    },
    [onLoginSuccess]
  );

  useEffect(() => {
    const initializeGoogle = () => {
      if (!window.google || !buttonRef.current) return;

      window.google.accounts.id.initialize({
        client_id: "81719576354-vvgp178ra26q017f5gtsldrb3vg2ctan.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      buttonRef.current.innerHTML = "";

      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
        shape: "pill",
        text: "signin_with",
        width: 240,
      });
    };

    const existingScript = document.getElementById("google-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.id = "google-script";
      script.onload = initializeGoogle;
      document.body.appendChild(script);
    } else {
      initializeGoogle();
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.innerHTML = "";
      }
    };
  }, [handleCredentialResponse]);

  return <div ref={buttonRef}></div>;
}

export default GoogleLoginButton;