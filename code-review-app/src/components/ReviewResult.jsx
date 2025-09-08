import '../styles/ReviewResult.scss'

const ReviewResult = ({ result }) => {
  return (
    <div className="result-panel">
      <pre>
        {result ? (
          result
        ) : (
          <span className="placeholder-text">
            Введите код слева и нажмите 'Отправить', чтобы увидеть результат анализа здесь.
          </span>
        )}
      </pre>
    </div>
  );
};

export default ReviewResult;