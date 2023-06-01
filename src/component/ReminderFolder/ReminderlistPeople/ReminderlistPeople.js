/* eslint-disable react/prop-types */
import React from "react";
import "../ReminderlistPeople/ReminderlistPeople.css";



const ReminderlistPeople = ( { people , removeEntry } ) => {
  return (
    <>
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
    </>
  );
};


export default ReminderlistPeople;