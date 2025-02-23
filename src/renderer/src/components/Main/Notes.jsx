import { Supabase } from "../../App";
import { useContext } from "react";

export default function Notes() {
  const supabase = useContext(Supabase);
  return (
    <div>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      <h1>Notes</h1>
    </div>
  );
}
