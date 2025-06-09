import './Header.css';

export function Header(): JSX.Element {
    return (
        <div className="header">
            <span>Выбор пользователя</span>
            <select name="" id="">
                <option value="1">Аннунак</option>
                <option value="2">Вася</option>
                <option value="3">Серега</option>
            </select>
        </div>
    );
}