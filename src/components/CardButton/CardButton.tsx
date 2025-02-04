interface CardButtonProps {
    children?: React.ReactNode;
}

const CardButton = ({ children }: CardButtonProps): JSX.Element => {
    return (
        <button>{ children }</button>
    );
};

export default CardButton;