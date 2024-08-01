import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/2025.png";

export default function FooterSection() {
  return (
    <>
      <footer className=" shrink-0 bg-black">
        <div className=" container p-8 text-white">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="my-4 flex w-[200px] flex-col justify-center rounded-md bg-white p-3">
              <Link href="/">
                <Image src={Logo} alt="AI Days 2025 Logo" width={400} />
              </Link>
            </div>
            <div>
              <div className="mb-3 ml-20 mt-2 sm:mb-0">
                <ul className="mt-2">
                  <Link href="/about">
                    <li>About Us</li>
                  </Link>
                  {/* <Link href="/speakers">
                    <li>Speakers</li>
                  </Link> */}
                  <Link href="/venue">
                    <li>Venue</li>
                  </Link>
                  {/* <Link href="/partners">
                    <li>Our Partners</li>
                  </Link> */}
                  <Link href="/newsroom">
                    <li>Newsroom</li>
                  </Link>
                  <Link href="/contact-us">
                    <li>Contact Us</li>
                  </Link>
                  {/* <Link href="/campaign">
                    <li>Campaign Material</li>
                  </Link> */}
                </ul>
              </div>
            </div>
            <div>
              <p className="font-bold">Venue</p>
              <address className="mt-2 not-italic">
                International Institute of Information Technology
                <br />
                Professor CR Rao Road, Gachibowli,
                <br />
                Hyderabad, Telangana 500032
              </address>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="https://twitter.com/swechafsmi">
              <TwitterIcon className="size-6" />
            </Link>
            <Link href="https://www.linkedin.com/company/swechafsmi">
              <LinkedInIcon className="size-6" />
            </Link>
            <Link href="https://www.instagram.com/swechafsmi">
              <InstagramIcon className="size-6" />
            </Link>
            <Link href="https://www.facebook.com/swechafsmi">
              <FacebookIcon className="size-6" />
            </Link>
            <Link href="https://www.youtube.com/swechafsmi">
              <YoutubeIcon className="size-6" />
            </Link>
          </div>
        </div>
        <div className="mt-6 bg-slate-900 p-3 text-center text-xl text-white">
          ©2025 AI Days | Powered by AI Days
        </div>
      </footer>
    </>
  );
}

function LinkedInIcon(props) {
  return <FontAwesomeIcon icon={faLinkedinIn} />;
}
function YoutubeIcon(props) {
  return <FontAwesomeIcon icon={faYoutube} />;
}

function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
