export interface JournalForm {
        title: string | undefined,
        date: Date | undefined,
        data: string | undefined,
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