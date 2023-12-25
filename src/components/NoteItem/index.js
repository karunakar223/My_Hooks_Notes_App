// Write your code here
import {ListItem, Heading, Description} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {note, noteDescription} = noteDetails
  return (
    <ListItem>
      <Heading>{note}</Heading>
      <Description>{noteDescription}</Description>
    </ListItem>
  )
}

export default NoteItem
