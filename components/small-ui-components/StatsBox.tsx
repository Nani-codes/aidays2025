import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faUsers } from "@fortawesome/free-solid-svg-icons";

const StatsBox = ({
  title,
  value,
  description
}) => {
  return (
      <div className="flex flex-col">
        <h2 className="mt-2 text-lg font-semibold uppercase tracking-wider">
          {title}
        </h2>
        <div className="my-3 w-full border-t border-gray-500" />
        <p className="text-6xl font-bold">
          {value}
        </p>
        <p className="mt-4">
          {description}
        </p>
      </div>
  )
}

export default StatsBox;
