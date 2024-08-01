import Link from "next/link";
import React from "react";

function GoogleSheetsEmbed() {
  const frameUlr =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEHJdyA_5FvADH2OpO_6nHuwWDrNoppR1vDgiJowsu80D7vjdpTfsFO_E_XVLI4Rwpem_kMW5dbXT1/pubhtml#";

  return (
    <div className="flex flex-col gap-2">
      <iframe
        src={frameUlr}
        width="100%"
        height="500px"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Embedded Google Sheets"
      >
        Loading...
      </iframe>
      <Link href={frameUlr} target="_blank" className="text-blue-800">
        View Full Agenda
      </Link>
    </div>
  );
}

export default GoogleSheetsEmbed;
