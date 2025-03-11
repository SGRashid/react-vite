import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import ColoredButton from './components/ColoredButton/ColoredButton';
import { JournalItem, JournalItemProps } from './components/JournalItem/JournalItem';
import getFomrData from './services/GetFormData';

function App() {
  const INITIAL_DATA: JournalItemProps[] = [
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

  const [data, setData] = useState(INITIAL_DATA);

  const formHandler: React.FormEventHandler = (e) => {
    const formProps = getFomrData(e);
    // console.log(formProps);
    setData(d => {
      const newId = d[d.length - 1].id + 1;
      return [
        ...d,
        { id: newId, title: formProps.title, date: new Date(formProps.date as string), data: formProps.data} as JournalItemProps
      ];
    });
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
        <input type='text' name="title" />
        <input type="date" name="date" />
        <textarea name="data" />
        <Button />
        {/* <Button /> */}
        {/* <ColoredButton>
          Нажми на меня!!
        </ColoredButton> */}
      </form>
      </div>
    </div>
  );
}

export default App;
