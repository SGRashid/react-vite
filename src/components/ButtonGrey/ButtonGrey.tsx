import './ButtonGrey.css';

export const ButtonGrey = (props: {
        text: string,
        onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | null;
    }): JSX.Element => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
            props.onClick(event);
        }
    };
    return (
        <button
            className="button-grey"
            onClick={handleClick}
        >
            {props.text}
        </button>
    );
};