import { useState } from "react";
import './styles/index.scss';
import CodePanel from "./components/CodePanel";
import ReviewResult from "./components/ReviewResult";

function App() {
  const [value, setValue] = useState('');

  function handleSubmit() {
    setValue('');
  }

  return (
    <>
      <div className="app-container">
        <h1>AI Code Review</h1>
        <div className="main-content">
          <CodePanel 
            code={value} 
            onCodeChange={setValue} 
            onSubmit={handleSubmit} 
          />
          <ReviewResult />
        </div>
      </div>
    </>
  )
}

export default App
