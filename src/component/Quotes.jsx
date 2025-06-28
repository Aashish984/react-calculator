import { useEffect, useState } from "react"
const Quotes = () => {
    const quotes = [
        "'Every expert was once a beginner.'",
        "'Believe you can and you're halfway there.'",
        "'Mistakes are proof that you're trying.'",
        "'Push yourself, because no one else is going to do it for you.'",
        "'Your limitation—it’s only your imagination.'"
    ];
   
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000); // change quote every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="quotes-box">
      <div className="name-tag">Made by ~ Aashish</div>
      <p>{quotes[index]}</p>
    </div>
  );
};

export default Quotes;