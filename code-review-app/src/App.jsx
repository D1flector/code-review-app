import { useState } from "react";
import './styles/index.scss';
import CodePanel from "./components/CodePanel";
import ReviewResult from "./components/ReviewResult";
import { fetchCodeReview } from "./api/mockData";

function App() {
  const [value, setValue] = useState('');
  const [reviewResult, setReviewResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setReviewResult(null);

      const payload = {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: value,
        },
      ],
    };

    try {
      const completion = await fetchCodeReview(payload);
      const resultMessage = completion.choices[0].message.content;
      setReviewResult(resultMessage)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
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
            isLoading={isLoading}
          />
          <ReviewResult
            result={reviewResult}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  )
}

export default App
