import React, { Fragment } from "react";

const Card = ({ name, email, id }) => {
  return (
    <Fragment>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="kities" src={`https://robohash.org/${id}?set=set4`} />

        <h1>{name}</h1>
        <p> {email}</p>
      </div>
    </Fragment>
  );
};

export default Card;

//
