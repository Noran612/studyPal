import React ,{useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import RecipeReviewCard from "./RecipeReviewCard";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px', // Adjust the gap to your desired spacing
          margin: '20px 0', // Optional outer margin
        }}
      >
        {notes.length > 0 &&
          notes.map((noteItem, index) => (
            <RecipeReviewCard
              key={index}
              title={noteItem.title}
              content={noteItem.content}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;