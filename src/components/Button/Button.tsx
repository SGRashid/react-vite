import './Button.css';

const Button = (props: { text: string }): JSX.Element => {
    return (
        <button
            className='button accent'
        >
            { props.text }
        </button>
    );
};

export default Button;