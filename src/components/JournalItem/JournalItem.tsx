import './JournalItem.css';

interface JournalItemProps {
    title: string;
    date: Date;
    data: string;
}

const JournalItem = (props: JournalItemProps): JSX.Element => {
    const { title, date, data } = props;
    const formatedDate = Intl.DateTimeFormat('ru-RU').format(date);

    return (
        <div className="journal-item">
            <h2 className="journal-item__header">{ title }</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__date">{ formatedDate }</div>
                <div className="journal-item__text">{ data }</div>
            </h2>
        </div>
    );
};

export { JournalItem };
export type { JournalItemProps };
