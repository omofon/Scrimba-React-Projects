import Header from "./components/common/Header";
import TravelCard from "./components/travel/TravelCard";
import travelData from "./data/travel";

console.log("Travel Data:", travelData);
export default function App() {
  return (
    <>
      <Header />
      <main className="px-20">
        {travelData.map((item) => {
          console.log("Testing rendering", item.id, item.title);
          return (
            <TravelCard
              key={item.id}
              entry={item}
            />
          );
        })}
      </main>
    </>
  );
}
