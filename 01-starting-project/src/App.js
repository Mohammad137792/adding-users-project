import React from "react";
import Card from "./Components/Card/Card";
import { useState } from "react";
import Output from "./Components/Card/Output";
import './Components/Card/Overlay';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (name, age) => {
    setUsersList((el) =>
      [...el, { name: name, age: age }]
    );
  };
  return (
    <div>
      <Card
        setUserInList={addUser}
      />
      {usersList.length > 0 &&<Output usersList={usersList} />}
    </div>
  );
}

export default App;