// Write your code here
const NoteItem = props => {
  const {title, content} = props

  return (
    <ul>
      <li>
        <h1>{title}</h1>
        <p>{content}</p>
      </li>
    </ul>
  )
}

export default NoteItem
