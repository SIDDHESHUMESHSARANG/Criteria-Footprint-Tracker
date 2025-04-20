import React, { useEffect } from "react";

const ResultChart = ({ data }) => {
  useEffect(() => {
    const shareButton = document.getElementById("share");
    const handlePrint = () => window.print();

    if (shareButton) {
      shareButton.addEventListener("click", handlePrint);
    }

    // Cleanup
    return () => {
      if (shareButton) {
        shareButton.removeEventListener("click", handlePrint);
      }
    };
  }, []);

  return (
    <div className="card">
      <h2>Your Annual Emissions</h2>
      <ul>
        {Object.entries(data).map(([pollutant, value]) => (
          <li key={pollutant} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{pollutant}:</span>
            <span>{value.toFixed(2)} kg/year</span>
          </li>
        ))}
      </ul>

      <div>
        <button id="share">Share</button>
      </div>
    </div>
  );
};

export default ResultChart;
