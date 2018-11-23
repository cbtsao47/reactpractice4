import React from "react";
import PropTypes from "prop-types";
const Animals = props => {
  return (
    <React.Fragment>
      {props.animals.map(animal => (
        <div key={animal.id}>
          <h2>{animal.name}</h2>
          <p>{animal.species}</p>
        </div>
      ))}
    </React.Fragment>
  );
};
export default Animals;

Animals.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string
    }).isRequired
  )
};
