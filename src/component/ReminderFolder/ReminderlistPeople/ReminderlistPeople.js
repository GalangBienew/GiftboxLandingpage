/* eslint-disable react/prop-types */
import React from "react";
import "../ReminderlistPeople/ReminderlistPeople.css";
import { useNavigate } from "react-router-dom";



const ReminderlistPeople = ( { people , removeEntry } ) => {
  let navigate = useNavigate();

  return (
    <>
      <div className="Button-this">
        {people.map(( person ) => {
          const { id , name , age , image} = person;
          return (
            <article key={id} className="person">
              <img src={image} />
              <h4>{name}</h4>
              <p>{age}</p>
              <button onClick={() => removeEntry(person.id)}>Hapus</button>
            </article>
          );
        })}
        <button onClick={() => navigate("/")}> back to Home</button>
      </div>
    </>
  );
};


export default ReminderlistPeople;