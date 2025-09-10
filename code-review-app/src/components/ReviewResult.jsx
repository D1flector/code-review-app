import '../styles/ReviewResult.scss';
import ReactMarkdown from 'react-markdown';

const ReviewResult = ({ result, isLoading }) => {

  const renderContent = () => {
    if (isLoading) {
      return <span className="placeholder-text">Анализ кода...</span>;
    }
    
    if (result) {
      return <ReactMarkdown>{result}</ReactMarkdown>;
    }

    return (
      <span className="placeholder-text">
        Введите код слева и нажмите 'Отправить', чтобы увидеть результат анализа здесь.
      </span>
    );
  };

  return (
    <div className="result-panel">
      {renderContent()}
    </div>
  );
};

export default ReviewResult;