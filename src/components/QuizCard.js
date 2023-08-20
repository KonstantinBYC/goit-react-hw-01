export const QuizCard = ({ quiz: { topic, level, time, question } }) => {
  return (
    <div>
      <h2>{quiz.topic} </h2>
      <div>
        <p>Level: {quiz.level}</p>
        <p>Time : {quiz.time}</p>
        <p>Question: {quiz.question}</p>
      </div>{' '}
    </div>
  );
};
