import './SelectUser.css';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

export function SelectUser(): JSX.Element {
    const userId = useContext(UserContext).id;

    const changeUser: React.ChangeEventHandler<HTMLSelectElement> = (e) => console.log(e.target.value);

    return (
        <div className="SelectUser">
            <span>Выбор пользователя</span>
            <select name="" id="" value={ userId } onChange={changeUser}>
                <option value="1">Аннунак</option>
                <option value="2">Вася</option>
                <option value="3">Серега</option>
            </select>
        </div>
    );
}