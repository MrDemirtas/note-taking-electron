import { createContext, useEffect, useRef, useState } from "react";

import { getPage } from "./helper";
import { supabase } from "../../../supabaseClient";

export const Supabase = createContext();
function App() {
  const [session, setSession] = useState(null);
  const sessionRef = useRef(session);
  const [currentPage, setCurrentPage] = useState(
    getPage(decodeURIComponent(window.location.hash.substring(1)) || "/login")
  );

  useEffect(() => {
    document.title = "Note Taking App - " + currentPage.title;
  }, [currentPage]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        window.location.hash = "/notes";
      } else {
        window.location.hash = "/login";
      }
      sessionRef.current = session;
    });

    window.addEventListener("hashchange", () => {
      if (
        !sessionRef.current &&
        !window.location.hash.startsWith("#/signup") &&
        !window.location.hash.startsWith("#/forgot-password") &&
        !window.location.hash.startsWith("#/reset-password") &&
        !window.location.hash.startsWith("#/login")
      ) {
        window.location.hash = "/login";
        return;
      } else if (
        sessionRef.current &&
        (window.location.hash.startsWith("#/login") ||
          window.location.hash.startsWith("#/forgot-password") ||
          window.location.hash.startsWith("#/reset-password") ||
          window.location.hash.startsWith("#/signup"))
      ) {
        window.location.hash = "/notes";
        return;
      }
      const page = getPage(
        decodeURIComponent(window.location.hash.substring(1)) || "/login"
      );
      setCurrentPage(page);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Supabase.Provider value={supabase}>
      {currentPage.component}
    </Supabase.Provider>
  );
}

export default App;
