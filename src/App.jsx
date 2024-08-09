import { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Component/Qoute"; // Uncomment and correct the spelling when ready to use

function App() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  const handleIndex = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
  };

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((response) => {
        setQuotes(response.data.quotes);
      })
      .catch((error) => {
        setError(error.message); // Set error message string
      });
  }, []);

  return (
    <div className="text-white m-60">
      {error && <p>Error: {error}</p>}
      <h1 className="uppercase text-center text-3xl font-mono hover:font-bold">
        QuoteCraft
      </h1>
      {/* Conditionally render the Quote component or quote details */}
      {quotes.length > 0 ? (
        <>
          <Quote quote={quotes[index].quote} onNext={handleIndex} />

          <p>By {quotes[index].author}</p>
        </>
      ) : (
        <p>Loading...</p> // Show loading state
      )}
    </div>
  );
}

export default App;
