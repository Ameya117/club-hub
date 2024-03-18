import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </GoogleOAuthProvider>
  );
}
