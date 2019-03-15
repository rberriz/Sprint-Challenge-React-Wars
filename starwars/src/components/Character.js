import React from "react";

const Character = props => {
  return (
    <div className="char-container">
      <div className="char">
        <div className="char-name">
            <p>{props.character.name}</p>
        </div>
        <div className="char-data">
          <span>Gender:</span> {props.character.gender}
          <br />
          <span>Birth Year:</span> {props.character.birth_year}
          <br />
          <span>Height:</span> {props.character.height}
          <br />
          <span>Mass:</span> {props.character.mass}
          <br />
          <span>Homeworld:</span> {props.character.homeworld}
        </div>
      </div>
    </div>
  );
};
export default Character;
