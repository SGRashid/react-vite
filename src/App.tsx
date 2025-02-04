import './App.css';
import Button from './components/Button/Button';
import { JournalItem, JournalItemProps } from './components/JournalItem/JournalItem';

function App() {
  const data: JournalItemProps[] = [
    {
      title: 'Вечеринка',
      date: new Date,
      data: 'Купили абсент и колу...'
    }
  ];

  return (
    <div className='main-container'>
      <Button />
      <JournalItem
        title={data[0].title}
        date={data[0].date}
        data={data[0].data}
      />
    </div>
  );
}

export default App;
