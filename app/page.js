"use client";

import App from "./App";
import AuthModalProvider from "./contexts/authModalContext";

export default function Home() {
  return (
    <AuthModalProvider>
      <App />
    </AuthModalProvider>
  );
}
