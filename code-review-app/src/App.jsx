import { useState } from "react";

function App() {
  const [value, setValue] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    setValue('');
  }

  return (
    <>
      <div className="app-container">
        <h1>AI Code Review</h1>
        <div className="main-content">
          <div className="editor-panel">
            <textarea
              placeholder="Вставьте ваш код"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
            </textarea>
            <button onClick={handleSubmit}>Отправить</button>
          </div>
          <div className="result-panel">
            <h2>Результаты анализа:</h2>
            <pre></pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
