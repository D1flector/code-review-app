import '../styles/CodePanel.scss'

const CodePanel = ({ code, onCodeChange, onSubmit }) => {

  return (
    <>
      <div className="editor-panel">
      <textarea
        placeholder="Вставьте ваш код"
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
      >
      </textarea>
      <button onClick={onSubmit}>Отправить</button>
    </div>
    </>
  )
}

export default CodePanel;