import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
// import ColoredButton from './components/ColoredButton/ColoredButton';
import { JournalItem, JournalItemProps } from './components/JournalItem/JournalItem';
import getFomrData from './services/GetFormData';

const LOCAL_STORAGE_ITEMS_KEY = 'SAVED_ITEMS';

function App() {
  // const INITIAL_DATA: JournalItemProps[] = [
  //   {
  //     id: 1,
  //     title: 'Вечеринка',
  //     date: new Date,
  //     data: 'Купили абсент и колу...'
  //   },
  //   {
  //     id: 2,
  //     title: 'Вечеринка',
  //     date: new Date,
  //     data: 'Купили абсент и колу...'
  //   }
  // ];

  const [items, setData] = useState<JournalItemProps[]>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_ITEMS_KEY);
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData).map((item: any) => ({...item, date: new Date(item.date as string)}));
      setData(parsedData);
    }
  }, []);

  useEffect(
    () => {
      if (!items.length) {
        return;
      }
      localStorage.setItem(LOCAL_STORAGE_ITEMS_KEY, JSON.stringify(items));
    },
    [items]
  );

  const formHandler: React.FormEventHandler = (e) => {
    const fp = getFomrData(e);

    if (!fp.title || !fp.date || !fp.data) {
      alert('ДАННЫЕ ВВЕДИ !!!');
      return;
    }

    setData(d => {
      // const newId = d[d.length - 1]?.id + 1;
      const newId = Math.random() * 10_000;

      const newDataElement: JournalItemProps = {
        id: newId,
        title: fp.title,
        date: new Date(fp.date as string),
        data: fp.data
      } as JournalItemProps;

      return [ ...d, newDataElement ];
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
          items.map(item =>
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
