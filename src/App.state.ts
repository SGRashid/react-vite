import { JournalForm } from './types/JournalItemsTypes';

export const INITIAL_FORM_STATE: JournalForm = {
        title: undefined,
        date: undefined,
        data: undefined,
};

export const INITIAL_STATE = {
    isValid: {
        title: true,
        date: true,
        data: true,
    },
    values: {
        title: undefined,
        date: undefined,
        data: undefined,
    },
    isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
    switch(action.type) {
        case ('RESET_VALIDITY'): 
            return { ...state, isValid: INITIAL_STATE.isValid };
        default:
            return state;
    }
}