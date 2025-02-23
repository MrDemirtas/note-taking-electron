const notFoundStyle = {
  textAlign: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  ".page-header": {
    fontSize: "3rem",
    marginBottom: "1rem",
  },

  ".emptyState": {
    fontSize: "1.5rem",
  },
};

export default function NotFound() {
  return (
    <div className="not-found" style={notFoundStyle}>
      <h1 className="page-header">404 Not Found</h1>
      <p className="emptyState">The page you are looking for does not exist.</p>
    </div>
  );
}
