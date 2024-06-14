import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(newNotes) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((note, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            title={note.title}
            content={note.content}
            key={index}
            id={index}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
