export interface JournalForm {
        title: string,
        date: string,
        data: string,
}

export interface JournalItemProps {
    id: number;
    title: string;
    date: Date;
    data: string;
}

export interface ParsedJournalItem {
    id: number;
    title: string;
    date: string;
    data: string;
}