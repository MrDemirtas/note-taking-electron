import { useEffect, useState } from "react";

import { getPage } from "./helper";
import { supabase } from "../../../supabaseClient";

function App() {
  const [session, setSession] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    getPage(window.location.hash.substring(1) || "/login")
  );

  useEffect(() => {
    document.title = "Note Taking App - " + currentPage.title;
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      const page = getPage(window.location.hash.substring(1) || "/login");
      setCurrentPage(page);
    });

    return () => {
      window.removeEventListener("hashchange", () => {
        const page = getPage(window.location.hash.substring(1) || "/login");
        setCurrentPage(page);
        document.title = page.title;
      });
    };
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    window.location.hash = session ? "/notes" : "/login";
  }, [session]);

  return currentPage.component;
}

export default App;
