import { useState } from "react";

function App() {
  const [cv, setCv] = useState(null);
  const [score, setScore] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setCv(file);

    // Simulation IA
    const fakeScore = Math.floor(Math.random() * 40) + 60;
    setScore(fakeScore);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚀 IA CV Optimizer</h1>

      <input type="file" onChange={handleUpload} />

      {cv && <p>CV chargé : {cv.name}</p>}

      {score && (
        <h2 style={{ color: "green" }}>
          Score de réussite : {score}%
        </h2>
      )}
    </div>
  );
}

export default App;