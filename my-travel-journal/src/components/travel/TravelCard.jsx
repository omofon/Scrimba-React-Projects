import { IoLocation } from "react-icons/io5";

export default function TravelCard({ entry }) {
  return (
    <>
      <article className="flex my-5 space-x-5 items-center">
        <div className="shrink-0 w-31.25 h-42 overflow-hidden rounded-sm mr-5">
          <img
            src={entry.img.src}
            alt={entry.img.alt}
            className="block w-full h-full object-cover"
          />
        </div>
        <section>
          <div className="flex items-center p-0 mb-1">
            <IoLocation className="text-red-400 mr-1 p-0" size={16} />
            <span className="uppercase tracking-widest font-medium mr-3 ">
              {entry.country}
            </span>
            <a
              className="text-gray-500 underline hover:cursor-pointer hover:text-gray-800"
              href={entry.googleMapsLink}
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="mb-4 text-2xl font-bold">{entry.title}</h2>
          <p className="mb-2 font-bold">{entry.dates}</p>
          <p className="text-base max-w-4xl">{entry.text}</p>
        </section>
      </article>
      <div className="w-auto bg-gray-300 h-0.5 my-5"></div>
    </>
  );
}