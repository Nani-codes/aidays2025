import React, { createContext, useContext, useEffect, useState } from "react";
import { Day, Event, ScheduleData } from "./agenda";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Speaker } from "data/drupal/node--speakers";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import GoogleSheetsEmbed from "./Shee4tEmbed";

const AgendaContext = createContext({
  selected: null,
  setSelected: (_: any) => null,
});
const ContextProvider = ({ children }) => {
  const [selected, _setSelected] = useState(null);
  const setSelected = (agendaItem) => {
    _setSelected(agendaItem);
  };
  return (
    <AgendaContext.Provider value={{ selected, setSelected }}>
      {children}
    </AgendaContext.Provider>
  );
};

const ShowPopoverContext = createContext(false);

const Background = () => (
  <div className="absolute inset-0 -bottom-10 -top-40 overflow-hidden bg-indigo-50">
    {/* <Image
      alt=""
      width={918}
      height={1495}
      decoding="async"
      data-nimg={1}
      className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]"
      style={{ color: "transparent" }}
      src=""
    /> */}
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
  </div>
);

const TabsMobile = ({ days }: { days: Day[] }) => {
  const context = useContext(AgendaContext);
  const isInactive = (day: Day) => {
    return day.date !== context.selected;
  };
  const opacityClass = (day: Day) => {
    return isInactive(day) ? "opacity-70" : "";
  };
  const onClick = (e, day: Day) => {
    e.preventDefault();
    context.setSelected(day.date);
  };
  return (
    <div
      className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8"
      role="tablist"
      aria-orientation="vertical"
    >
      {days.map((day) => (
        <div
          key={day.date}
          className={`relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0 ${opacityClass(day)}`}
        >
          <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
            <time dateTime={day.date}>
              <button
                className="ui-not-focus-visible:outline-none"
                role="tab"
                type="button"
                aria-selected="false"
                tabIndex={-1}
                onClick={(e) => onClick(e, day)}
              >
                <span className="absolute inset-0" />
                {day.date}
              </button>
            </time>
          </h3>
          <p className="mt-1.5 text-base tracking-tight text-blue-900">
            {day.description}
          </p>
        </div>
      ))}
    </div>
  );
};

function Badges({ badges }: { badges: string[] }) {
  return (
    <div>
      {badges?.length > 0 && (
        <div className="mx-auto w-2/3">
          {badges.map((s) => (
            <span
              key={s}
              className="m-1 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ConditionalPopover({
  children,
  enabled = false,
}: {
  children: React.ReactNode;
  enabled: boolean;
}) {
  if (!enabled) {
    return <>{children}</>;
  } else {
    return (
      <Popover>
        <PopoverTrigger>{children}</PopoverTrigger>
        {
          <PopoverContent className="bg-blue-50 text-blue-700">
            <div>
              Detailed schedule can be seen in&nbsp;
              <Link href="/#tracks" className="underline">
                track&apos;s page.
              </Link>
            </div>
          </PopoverContent>
        }
      </Popover>
    );
  }
}

function ScheduleItemHead({
  speakers,
  topic,
  badges,
  description,
  venue,
}: {
  speakers: Speaker[];
  topic: string;
  badges: string[];
  description: string;
  venue: string;
}) {
  const showPopover = useContext(ShowPopoverContext); // Access showPopover value from context

  return (
    <>
      <h4 className="text-lg font-semibold tracking-tight text-blue-900">
        {topic}
      </h4>
      {speakers.length > 0 && (
        <div className="">
          {speakers.map((s, i) => (
            <span key={s.id} className="mt-1 tracking-tight text-blue-900">
              <Link href={s.path.alias}>{s.title}</Link>
              {i !== speakers.length - 1 && ", "}
            </span>
          ))}
        </div>
      )}

      {description && <p className="mt-1 text-blue-900">{description}</p>}
      {venue && (
        <div className="mt-1 text-blue-900">
          <FontAwesomeIcon icon={faLocationDot} /> {venue}
        </div>
      )}

      <ConditionalPopover enabled={showPopover}>
        <Badges badges={badges} />
      </ConditionalPopover>
    </>
  );
}

function ScheduleItem({
  item,
  hideTopBorder,
}: {
  item: Event;
  hideTopBorder: boolean;
}) {
  return (
    <li>
      {!hideTopBorder && (
        <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
      )}
      <ScheduleItemHead
        speakers={item.speakers}
        topic={item.topic}
        badges={item.badges}
        venue={item.venue}
        description={item.description}
      />
      <p className="mt-1 font-mono text-sm text-slate-500">
        <time>{item.startTime}</time>
        {item.endTime && (
          <>
            {" "}
            - <time>{item.endTime}</time>
          </>
        )}
      </p>
    </li>
  );
}

function MobileSchedule({ children, hidden }) {
  return (
    <div className={`${hidden && "hidden"}`}>
      <span
        aria-hidden="true"
        role="tabpanel"
        tabIndex={-1}
        style={{
          position: "fixed",
          top: 1,
          left: 1,
          width: 1,
          height: 0,
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0px, 0px, 0px, 0px)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      />

      <div
        className="ui-not-focus-visible:outline-none"
        role="tabpanel"
        tabIndex={0}
      >
        <ol
          role="list"
          className="space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
        >
          {children}
        </ol>
      </div>

      <span
        aria-hidden="true"
        role="tabpanel"
        tabIndex={-1}
        style={{
          position: "fixed",
          top: 1,
          left: 1,
          width: 1,
          height: 0,
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      />
    </div>
  );
}

const DesktopScheduleList = ({ children }) => {
  return (
    <ol
      role="list"
      className="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
    >
      {children}
    </ol>
  );
};

const EventLi = ({ events }: { events: Event[] }) => {
  return (
    <>
      {events.map((it, i) => (
        <ScheduleItem key={i} item={it} hideTopBorder={i === 0} />
      ))}
    </>
  );
};

const DesktopLayout = ({ days }: { days: Day[] }) => {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
      {days.map((day) => (
        <section key={day.date}>
          <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
            <time dateTime={day.date}>{day.date}</time>
          </h3>
          <p className="mt-1.5 text-base tracking-tight text-blue-900">
            {day.description}
          </p>
          <DesktopScheduleList>
            <EventLi events={day.events} />
          </DesktopScheduleList>
        </section>
      ))}
    </div>
  );
};

const MobileLayout = ({ days }: { days: Day[] }) => {
  const context = useContext(AgendaContext);

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden">
      <TabsMobile days={days} />
      {days.map((day) => (
        <MobileSchedule key={day.date} hidden={context.selected !== day.date}>
          <EventLi events={day.events} />
        </MobileSchedule>
      ))}
    </div>
  );
};

const Main = ({ data }: { data: Day[] }) => {
  const context = useContext(AgendaContext);
  useEffect(() => {
    if (!context.selected) {
      context.setSelected(data[0].date);
    }
  }, [context, data]);
  return (
    <div className="container relative">
      <MobileLayout days={data} />
      <DesktopLayout days={data} />
    </div>
  );
};

const AgendaTemplate = ({
  data,
  showPopover,
}: {
  data: ScheduleData;
  showPopover?: boolean;
}) => {
  "use client";

  return (
    <section aria-label="Schedule" className="py-10 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className=" text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            {data.title}
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-blue-900">
            {data.description}
          </p>
        </div>
        <div className="container">
          <GoogleSheetsEmbed />
        </div>
      </div>

      <div className="relative mt-14 sm:mt-24">
        <Background />
        <ContextProvider>
          <ShowPopoverContext.Provider value={showPopover}>
            <Main data={data.days} />
          </ShowPopoverContext.Provider>
        </ContextProvider>
      </div>
    </section>
  );
};

export default AgendaTemplate;
