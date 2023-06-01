/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useEffect , useState} from "react";
import Datapeople from "../ReminderFolder/UploadPeople/Datapeople";
import ReminderlistPeople from "../ReminderFolder/ReminderlistPeople/ReminderlistPeople";

import CreateUploadData from "../ReminderFolder/UploadPeople/CreateUploadData";

const CreateReminder = () => {
  const [people , setPeople] = useState(Datapeople);
    


  useEffect(() => {
    const peopleStorage = JSON.parse(localStorage.getItem("people"));
    if (peopleStorage) {
      setPeople(peopleStorage);
    }
  }, []);
  
  const addEntry = (newEntry) => {
    const Updatedata = [...people , newEntry];
    setPeople(Updatedata);

    
    localStorage.setItem("people" , JSON.stringify(Updatedata));
  };

  const removeEntry = (id) => {
    const removeData = people.filter((person) => person.id !== id);
    setPeople(removeData);

    localStorage.setItem("people" , JSON.stringify(removeData));
  };

  return (
    <main>
      <section className="container">
        <CreateUploadData addEntry={addEntry} />
        <h3>{people.length} birtdays</h3>
        <ReminderlistPeople people={people} removeEntry={removeEntry} />
      </section>
    </main>
    
      
    
  );
};

export default CreateReminder;