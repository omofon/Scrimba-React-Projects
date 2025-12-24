import Header from "./components/common/Header";
import TravelCard from "./components/travel/TravelCard";

function GetGreeting() {
  const hours = new Date().getHours();

  if (hours >= 5 && hours < 12) return "morning";
  if (hours >= 12 && hours < 17) return "afternoon";
  if (hours >= 17 && hours < 21) return "evening";
  return "night";
}

export default function App() {
  return (
    <>
      <Header />
      <TravelCard />
      <TravelCard />
      <TravelCard />
      <TravelCard />

      {/* <p>Hello, it is {GetGreeting()}</p> */}
    </>
  );
}
