import { useEffect, useState } from "react";

function MainContent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main">
      <p>
        Bonjour, on est le {time.getDate()}/
        {time.getMonth() + 1}/
        {time.getFullYear()} et il est{" "}
        {time.getHours()}:
        {time.getMinutes()}:
        {time.getSeconds()}
      </p>
    </main>
  );
}

export default MainContent;