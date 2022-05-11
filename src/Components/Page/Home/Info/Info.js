import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard/InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        bg="bg-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit Our Location"
        bg="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us Now"
        bg="bg-secondary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
