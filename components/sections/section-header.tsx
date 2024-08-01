import React from "react";

type SectionHeaderProps = {
  title?: string;
  pretitle?: string;
  description?: string[];
  htmlDescription?: string;
  center?: boolean;
  size?: string;
};
export default function SectionHeader({
  title,
  pretitle,
  description,
  htmlDescription,
  center,
  size,
  ...props
}: SectionHeaderProps) {
  const centerClass = center ? "text-center" : "";
  const sizeClass = size ? `text-${size}` : "text-5xl";
  return (
    <section {...props}>
      {" "}
      <div>
        {pretitle && (
          <h5 className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
            {pretitle}
          </h5>
        )}
        {title && (
          <h2
            className={`mb-4 text-5xl font-bold leading-tight ${centerClass} ${sizeClass}`}
          >
            {title}
          </h2>
        )}

        {description && (
          <div className="mt-8">
            {description.map((text, index) => (
              <p key={index} className="mb-2 text-lg text-gray-700">
                {text}
              </p>
            ))}
          </div>
        )}
        {htmlDescription && (
          <div
            className="prose mt-6 text-xl leading-loose"
            dangerouslySetInnerHTML={{
              __html: htmlDescription,
            }}
          />
        )}
      </div>
    </section>
  );
}
