// Write your code here
import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  MainHeader,
  CardContainer,
  NotesCard,
  Form,
  Note,
  NoteDescription,
  BtnContainer,
  AddBtn,
  NotesList,
  EmptyNotes,
  EmptyImage,
  EmptyHeading,
  EmptyDescription,
} from './styledComponents'

const Notes = () => {
  const [note, setNote] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onChangeNoteDescription = event => {
    setNoteDescription(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: v4(),
      note,
      noteDescription,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])

    setNote('')
    setNoteDescription('')
  }
  return (
    <MainContainer>
      <MainHeader>Notes</MainHeader>
      <CardContainer>
        <NotesCard>
          <Form onSubmit={onAddNote}>
            <Note
              type="text"
              onChange={onChangeNote}
              value={note}
              placeholder="Title"
            />
            <NoteDescription
              rows="9"
              cols="28"
              onChange={onChangeNoteDescription}
              value={noteDescription}
              placeholder="Take a Note..."
            />
            <BtnContainer>
              <AddBtn type="submit">Add</AddBtn>
            </BtnContainer>
          </Form>
        </NotesCard>
      </CardContainer>
      {notesList.length > 0 ? (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      ) : (
        <EmptyNotes>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyDescription>Notes you add will appear here</EmptyDescription>
        </EmptyNotes>
      )}
    </MainContainer>
  )
}

export default Notes
