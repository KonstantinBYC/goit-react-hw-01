import { QuizForm } from 'components/QuizForm';
import { QuizList } from 'components/QuizList';
import { SearchBar } from 'components/SearchBar';
import quizItems from '../quiz-items.json';

export const App = () => {
  return (
    <div>
      <QuizForm />
      <SearchBar />
      <QuizList items={quizItems} />
      Component
    </div>
  );
};
