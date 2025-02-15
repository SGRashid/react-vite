import './CardButton.css';

interface CardButtonProps {
    children?: React.ReactNode;
}

const CardButton = ({ children }: CardButtonProps): JSX.Element => {
    return (
        <button className="card-button">{ children }</button>
    );
};

export default CardButton;