import React from "react";
import Card from "./Card";

const Cardlist = ({ Kities }) => {
  return Kities.map((user, i) => {
    return (
      <Card
        key={Kities[i].id}
        id={Kities[i].id}
        name={Kities[i].name}
        email={Kities[i].email}
      />
    );
  });
};
export default Cardlist;
