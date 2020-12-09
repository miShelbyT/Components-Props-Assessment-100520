import React from 'react';
import Note from '../Components/Note';


class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }


    notes = () => {
      // console.log(this.apiResponse)
      return this.apiResponse().map(function(note){
        { return <Note note={note} /> }
    })
    }


    render() {
      
        return (
          
            <ul>
                {this.notes()}
            </ul>
        )
    }

}

export default NotesContainer;

