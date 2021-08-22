import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event){
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event){
    setLastName(event.target.value)
  }

  return (
    <form>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange} type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
