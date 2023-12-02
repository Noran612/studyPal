import React ,{useState}from "react";
import {useNavigate} from "react-router-dom";
import  auth  from "../firebase";
import Footer from "./Footer";
import RecipeReviewCard from "./RecipeReviewCard";
import CreateArea from "./CreateArea";

function MainPage() {
    const [notes, setNotes] = useState([]);
    const navigate=useNavigate();


    const handleSignOut = () => {
      auth.signOut()
        .then(() => {
          // Redirect to sign-in page or any other page after sign-out
          navigate.push("/signin");
        })
        .catch((error) => {
          console.error("Sign Out error:", error);
        });
    };


    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  
    return (
      <div>
        
       
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
        <div className="button-container">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
        <Footer />
      </div>
    );
  }
  export default MainPage;