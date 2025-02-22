import { useEffect, useState } from "react";

import { getPage } from "./helper";

function App() {
  const [route, setRoute] = useState("/login");

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setRoute(window.location.hash.substring(1));
    });
  }, []);

  return <>{getPage(route)}</>;
}

export default App;
