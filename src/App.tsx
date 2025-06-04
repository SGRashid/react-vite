import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
// import ColoredButton from './components/ColoredButton/ColoredButton';
import { JournalItem } from './components/JournalItem/JournalItem';
import getFomrData from './services/GetFormData';
import { JournalItemProps, ParsedJournalItem } from './types/JournalItemsTypes';
import { LOCAL_STORAGE_ITEMS_KEY } from './constants/JournalItemsStorageKey';



function App() {

  // const [ formState, dispatchForm ] = useReducer(formReducer, INITIAL_STATE);

  const [items, setData] = useState<JournalItemProps[]>([]);

  const [isValidationOk, setValidationState] = useState<boolean>(true);

  useEffect(() => {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_ITEMS_KEY);
    if (localStorageData) {
      const parsedData: JournalItemProps[] = JSON.parse(localStorageData)
        .map(
          (item: ParsedJournalItem) => ({...item, date: new Date(item.date)})
        );
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
      setValidationState(false);
      setTimeout(() => setValidationState(true), 2000);
      return;
    }

    setData(d => {
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
      <form
        className={'journal-form ' + (isValidationOk ? 'ok' : 'not-ok') }
        onSubmit={formHandler}
      >
        <input type='text' name="title" />
        <input type="date" name="date" />
        <textarea name="data" />
        <Button text='Сохранить' />
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
