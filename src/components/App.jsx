import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RecipeReviewCard from "./RecipeReviewCard";

function App() {
  // const [notes, setNotes] = useState([]);

  // function addNote(newNote) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, newNote];
  //   });
  // }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div>
      <Header />
      <RecipeReviewCard/>
      <Footer />
    </div>
  );
}

export default App;
