import React, { Fragment } from "react";

const Mission = ({ id, name, details, links: { image } }) => {
  return (
    <Fragment>
      <div style={{ marginBottom: "24px" }} onClick={() => {}}>
        <h1>{name}</h1>
        <h3>Details</h3>
        <h4>{details}</h4>
        <img src={image} height={100} width={100} alt={`${name} mission`} />
      </div>
    </Fragment>
  );
};

export default Mission;
