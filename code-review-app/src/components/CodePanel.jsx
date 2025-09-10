import '../styles/CodePanel.scss'

const CodePanel = ({ code, onCodeChange, onSubmit, isLoading }) => {

  return (
    <>
      <div className="editor-panel">
      <textarea
        placeholder="Вставьте ваш код"
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        readOnly={isLoading}
      >
      </textarea>
      <button
        onClick={onSubmit}
        disabled={isLoading || !code} 
      >
        {isLoading ? 'Анализ...' : 'Отправить'}
      </button>
    </div>
    </>
  )
}

export default CodePanel;