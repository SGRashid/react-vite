import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import ColoredButton from './components/ColoredButton/ColoredButton';
import { JournalItem, JournalItemProps } from './components/JournalItem/JournalItem';
import getFomrData from './services/GetFormData';

function App() {
  const data: JournalItemProps[] = [
    {
      id: 1,
      title: 'Вечеринка',
      date: new Date,
      data: 'Купили абсент и колу...'
    },
    {
      id: 2,
      title: 'Вечеринка',
      date: new Date,
      data: 'Купили абсент и колу...'
    }
  ];

  const formHandler: React.FormEventHandler = (e) => {
    const formProps = getFomrData(e);
    console.log(formProps);
  };

  return (
    <div className='main-container'>
      <div className="side-panel">
        {/* <CardButton>
          <p>+</p>
          <p>Новое воспоминане</p>
        </CardButton> */}
        {
          data.map(item =>
            <CardButton key={item.id}>
              <JournalItem {...item}/>
            </CardButton>
          )
        }
      </div>
      <div className="body">
      <form className='journal-form' onSubmit={formHandler}>
        <input type='text' name="input1" />
        <input type="date" name="date" />
        <textarea name="input2" />
        <Button />
        {/* <Button /> */}
        <ColoredButton>
          Нажми на меня!!
        </ColoredButton>
      </form>
      </div>
    </div>
  );
}

export default App;
