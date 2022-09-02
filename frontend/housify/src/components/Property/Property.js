import React from "react";
import Navbar from "../Header/Navbar";
import Hero from "../Hero/Hero";
import FeaturedProperty from "../Property/FeaturedProperty";
import MoreProperty from "./MoreProperty";
import FooterEM from "../Footer/FooterEM";

function Property() {
  return (
    <div className="Property">
      <Navbar />
      <Hero header="Discover More suitable properties across the world" />
      <FeaturedProperty />
      <MoreProperty />
      <FooterEM />
    </div>
  );
}

export default Property;
