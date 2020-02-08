import React from "react";
import Wrapper from "../ui_component/wrapper/HomeWrapper";
import CardSection from "../ui_component/card/CardSection";
import Contact from "../ui_component/ContactForm/contactForm";
import PopularDestination from "../ui_component/PopularDestinations/Destinations";
import Footer from "../ui_component/Footer/Footer";


export default function Home(props) {
  function handleSearch(search) {
    props.search(search);
  }
  return (
    <>
      <Wrapper search={handleSearch} data={props} />

      <PopularDestination />
      <CardSection />
      <Contact />
      <Footer />
     
    </>
  );
}
