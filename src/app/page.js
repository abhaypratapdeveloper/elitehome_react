import React from "react";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import ContactPage from "./Components/Contact";
const Page = () => {
  const cardData = [
    { id: 1, image: "/Card1.jpg", text: "Furnished 2 BHK" },
    { id: 2, image: "/Card2.jpg", text: "Modern Office Design" },
    { id: 3, image: "/Card3.jpg", text: "Cozy Living Room" },
  ];

  return (
    <div>
      <Banner
        Urlimage="/Card6.jpg"
        title="Transform Your Spaces With Modern Designs."
      />


      <div className=" mt-4 ">
        <div className="row g-4"> 
          {cardData.map((card) => (
            <div key={card.id} className="col-md-4" style={{color: "white"}}>
              <Card image={card.image} text={card.text} />
            </div>
          ))}
        </div>
        <div className=" mt-4 ">
        <div className="row g-4"> 
          {cardData.map((card) => (
            <div key={card.id} className="col-md-4" style={{color: "white"}}>
              <Card image={card.image} text={card.text} />
            </div>
          ))}
        </div>
        </div>
        <div className="mt-4">
<ContactPage/>
        </div>
      </div>
    </div>
  );
};

export default Page;
