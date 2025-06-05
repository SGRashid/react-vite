import { JournalItemProps } from '../types/JournalItemsTypes';

export const INITIAL_STATE_FOR_JOURNAL: JournalItemProps[] = [
    {
        id: 1,
        title: 'Поужинал у Макарыча',
        date: new Date(),
        data: 'Макароны от Макарыча как всегда хороши. Была бы блять к ним еще котлета...',
    },
]; 