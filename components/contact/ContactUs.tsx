import SectionHeader from "components/sections/section-header";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionHeader title="Contact Us" pretitle="AI DAYS 2024 > CONTACT US" />
      <div className="grid grid-cols-3">
        <div className="col-span-3 flex items-center justify-center md:col-span-1">
          <ContactUsForm />
        </div>
        <div className="col-span-3 mx-auto flex w-full rounded-md p-8 md:col-span-2" >
          <iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Swecha%20Office%20%7C%20Free%20(and%20Open%20Source)%20Software%20Community%20Telangana+(Swecha%20Office)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </div>
  )
}
