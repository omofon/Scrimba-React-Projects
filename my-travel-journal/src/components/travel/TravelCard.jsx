import { IoLocation } from "react-icons/io5";

export default function TravelCard() {
  return (
    <>
      <article className="flex px-10 my-5 space-x-5 items-center">
        <div className="shrink-0 w-31.25 h-42 overflow-hidden rounded-sm mr-5">
          <img
            src="https://scrimba.com/links/travel-journal-japan-image-url"
            alt="mount fuji"
            className="block w-full h-full object-cover"
          />
        </div>
        <section>
          <div className="flex items-center p-0 mb-1">
            <IoLocation className="text-red-400 mr-1 p-0" size={16} />
            <span className="uppercase tracking-widest font-medium mr-3 ">
              Japan
            </span>
            <a
              className="text-gray-500 underline hover:cursor-pointer hover:text-gray-800"
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="mb-4 text-2xl font-bold">Mount Fuji</h2>
          <p className="mb-2 font-bold">12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="text-base">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </section>
      </article>
      <div className="w-auto bg-gray-300 h-0.5 mx-10 my-5"></div>
    </>
  );
}

/* 
    Location:
Japan

Google Maps Link:
https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu

Dates:
12 Jan, 2021 - 24 Jan, 2021

Text:
Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
*/
