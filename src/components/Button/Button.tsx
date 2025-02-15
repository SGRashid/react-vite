import './Button.css';

const Button = (): JSX.Element => {
    return (
        <button
            className='button accent'
            onClick={ event => console.log(event) }
        >
            Сохранить
        </button>
    );
};

export default Button;