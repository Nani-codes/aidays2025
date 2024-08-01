import SectionHeader from "components/sections/section-header";
import VenueAddress from "./VenueAddress";
import Image from "next/image";

export default function Venue() {
  return (
    <div className="container">
      <SectionHeader title="Venue" pretitle="AI DAYS 2025 > Venue" />

      <div className="grid grid-cols-3">
        <div className="col-span-3 flex items-center justify-center md:col-span-1">
          <VenueAddress />
        </div>
        <div className="col-span-3 mx-auto flex w-full rounded-md p-5 md:col-span-2">
          <iframe
            width="100%"
            height="500"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=IIIT-H | The International Institute of Information Technology - Hyderabad Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>

      <SectionHeader title="Layout" pretitle="" size={"lg"} />
      <div className="flex items-center justify-center">
        <Image
          width={1000}
          height={1000}
          src="/venue-map.jpeg"
          alt="Descriptive Image Text"
          className="h-auto max-w-full object-contain px-4 md:px-0"
        />
      </div>
    </div>
  );
}
