import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
// import ColoredButton from './components/ColoredButton/ColoredButton';
import { JournalItem } from './components/JournalItem/JournalItem';
import getFomrData from './services/GetFormData';
import { JournalForm, JournalItemProps, ParsedJournalItem } from './types/JournalItemsTypes';
import { LOCAL_STORAGE_ITEMS_KEY } from './constants/JournalItemsStorageKey';
import { ButtonGrey } from './components/ButtonGrey/ButtonGrey';
import { INITIAL_STATE_FOR_JOURNAL } from './constants/InitialStateForJournal';
import { INITIAL_FORM_STATE } from './App.state';



function App() {

  // const [ formState, dispatchForm ] = useReducer(formReducer, INITIAL_STATE);

  const [items, setData] = useState<JournalItemProps[]>([]);

  const [isValidationOk, setValidationState] = useState<boolean>(true);

  const [formState, setFormState] = useState<JournalForm>(INITIAL_FORM_STATE);

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

    if (!formState.title || !formState.date || !formState.data) {
      setValidationState(false);
      setTimeout(() => setValidationState(true), 2000);
      return;
    }

    setData(d => {
      const newId = Math.random() * 10_000;

      const newDataElement: JournalItemProps = {
        id: newId,
        title: formState.title,
        date: new Date(formState.date as string),
        data: formState.data
      } as JournalItemProps;

      return [ ...d, newDataElement ];
    });

    setFormState(structuredClone(INITIAL_FORM_STATE));
  };

  const clearForm = () => setFormState({ title: '', date: '', data: ''});

  const clearData = () => {
    localStorage.clear();
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
      <div className="form-container">
        <form
          className={'journal-form ' + (isValidationOk ? 'ok' : 'not-ok') }
          onSubmit={formHandler}
        >
          <input type='text' name="title" value={formState.title} onChange={({target: {value}}) => setFormState(s => ({ ...s, title: value}))}/>
          <input type="date" name="date" value={formState.date} onChange={({target: {value}}) => setFormState(s => ({ ...s, date: value}))}/>
          <textarea name="data" value={formState.data} onChange={({target: {value}}) => setFormState(s => ({ ...s, data: value}))}/>
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
