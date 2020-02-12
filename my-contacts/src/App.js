import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ContactCard from './components/ContactCard';
import Header from './components/Header';  //dont be still
import contacts from './components/contacts';
function App() {
  return (
    <div className="App">
      <Header />
      <ContactCard 
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
      <ContactCard 
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <ContactCard 
        name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
