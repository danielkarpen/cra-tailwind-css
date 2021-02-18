import { useEffect, useState } from "react";

function StatefulComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(() => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return <p>Second: {seconds}</p>;
}

export default StatefulComponent;
