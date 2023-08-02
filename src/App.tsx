import "./App.css";
import AuthProvider from "./context/auth/AuthContext";

import "./index.css";
import Router from "./Router/Router";

function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
