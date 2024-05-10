// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {NotesHeading} from './styledComponents'

const Notes = () => {
  const [title, changeTitle] = useState('')
  const [content, changeContent] = useState('')
  const [noteList, changeList] = useState([])
  const [isAdded, changeOnAdd] = useState(false)
  const giveTitle = event => changeTitle(event.target.value)
  const giveText = event => changeContent(event.target.value)
  const addNote = event => {
    event.preventDefault()
    changeList(prevState => [...prevState, {title, content}])
    changeTitle('')
    changeContent('')
    changeOnAdd(true)
  }

  return (
    <>
      <NotesHeading>Notes</NotesHeading>
      <form onSubmit={addNote}>
        <input value={title} onChange={giveTitle} placeholder="Title" />
        <textarea
          onChange={giveText}
          value={content}
          placeholder="Take a Note..."
        >
          {content}
        </textarea>
        <button type="submit">Add</button>
      </form>
      <div>
        {isAdded ? (
          noteList.map(eachItem => (
            <NoteItem
              title={eachItem.title}
              content={eachItem.content}
              key={uuidv4()}
            />
          ))
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <h1>No notes yet</h1>
            <p>Notes you add will appear here</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Notes
