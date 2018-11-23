import React from "react";

const Animals = props => {
  return (
    <React.Fragment>
      {props.animals.map(animal => (
        <div>
          <h2 key={animal.id}>{animal.name}</h2>
          <p>{animal.species}</p>
        </div>
      ))}
    </React.Fragment>
  );
};
export default Animals;
