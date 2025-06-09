import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
// import ColoredButton from './components/ColoredButton/ColoredButton';
import { JournalItem } from './components/JournalItem/JournalItem';
// import getFomrData from './services/GetFormData';
import { JournalItemProps, ParsedJournalItem } from './types/JournalItemsTypes';
import { LOCAL_STORAGE_ITEMS_KEY } from './constants/JournalItemsStorageKey';
import { ButtonGrey } from './components/ButtonGrey/ButtonGrey';
import { INITIAL_STATE_FOR_JOURNAL } from './constants/InitialStateForJournal';
import { formReducer, INITIAL_STATE } from './App.state';
import { APP_ACTIONS_TYPES } from './App.actions';



function App() {

  const [ formState, dispatchForm ] = useReducer(formReducer, INITIAL_STATE);

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
    } else {
      setData(INITIAL_STATE_FOR_JOURNAL);
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

  const formHandler: React.FormEventHandler = () => {

    if (!formState.values.title || !formState.values.date || !formState.values.data) {
      setValidationState(false);
      setTimeout(() => setValidationState(true), 2000);
      return;
    }

    setData(d => {
      const newId = Math.random() * 10_000;

      const newDataElement: JournalItemProps = {
        id: newId,
        title: formState.values.title,
        date: new Date(formState.values.date as string),
        data: formState.values.data
      } as JournalItemProps;

      return [ ...d, newDataElement ];
    });
  };

  const clearForm = () => dispatchForm({ type: APP_ACTIONS_TYPES.CLEAR_VALUES });

  const clearData = () => {
    localStorage.clear();
  };

  const titleHandler: React.ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => dispatchForm({ type: APP_ACTIONS_TYPES.SET_TITLE, playload: value });
  const dateHandler: React.ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => dispatchForm({ type: APP_ACTIONS_TYPES.SET_DATE, playload: value });
  const dataHandler: React.ChangeEventHandler<HTMLTextAreaElement> = ({target: {value}}) => dispatchForm({ type: APP_ACTIONS_TYPES.SET_DATA, playload: value });

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
      <div className="form-container">
        <form
          className={'journal-form ' + (isValidationOk ? 'ok' : 'not-ok') }
          onSubmit={formHandler}
        >
          <input type='text' name="title" value={formState.values.title} onChange={titleHandler}/>
          <input type="date" name="date" value={formState.values.date} onChange={dateHandler}/>
          <textarea name="data" value={formState.values.data} onChange={dataHandler}/>
          <Button text='Сохранить' />
          {/* <Button /> */}
          {/* <ColoredButton>
            Нажми на меня!!
          </ColoredButton> */}
        </form>
        <ButtonGrey
          text={'Очистить форму'}
          onClick={clearForm}
        ></ButtonGrey>
        <ButtonGrey
          text={'Очистить память'}
          onClick={clearData}
        ></ButtonGrey>
      </div>
    </div>
  );
}

export default App;
