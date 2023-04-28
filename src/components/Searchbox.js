import React, { Fragment } from "react";

const Searchbox = ({ searchfield, searchchange }) => {
  return (
    <Fragment>
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue br4"
          type="search"
          placeholder="Search Your Cat Buddy"
          onChange={searchchange}
        ></input>
      </div>
    </Fragment>
  );
};

export default Searchbox;
