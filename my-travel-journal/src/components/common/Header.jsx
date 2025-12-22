import { GiGlobe } from "react-icons/gi";

export default function Header() {
  return (
    <header className="bg-red-500 text-white flex items-center justify-center gap-2 py-5 shadow">
      <GiGlobe className="text-white" size={24} />
      <h1 className="text-xl font-semibold">My Travel Journal</h1>
    </header>
  );
}
