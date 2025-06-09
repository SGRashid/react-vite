import { FormAction, APP_ACTIONS_TYPES } from './App.actions';

interface FormState {
    isValidationOk: boolean;
    values: {
        title: string;
        date: string;
        data: string;
    },
}

export const INITIAL_STATE = {
    isValidationOk: true,
    values: {
        title: '',
        date: '',
        data: '',
    }
};

export function formReducer(state: FormState, action: FormAction): FormState {
    switch(action.type) {
        case (APP_ACTIONS_TYPES.RESET_VALIDITY): 
            return { ...state, isValidationOk: INITIAL_STATE.isValidationOk };
        case(APP_ACTIONS_TYPES.SET_VALIDITY_OK):
            return { ...state, isValidationOk: INITIAL_STATE.isValidationOk };
        case(APP_ACTIONS_TYPES.SET_VALIDITY_NOT_OK):
            return { ...state, isValidationOk: false };
        case(APP_ACTIONS_TYPES.SET_TITLE):
            return { ...state, values:
                { ...state.values, title: action.playload }
            };
        case(APP_ACTIONS_TYPES.SET_DATE):
            return { ...state, values:
                { ...state.values, date: action.playload }
            };
        case(APP_ACTIONS_TYPES.SET_DATA):
            return { ...state, values:
                { ...state.values, data: action.playload }
            };
        case(APP_ACTIONS_TYPES.CLEAR_VALUES):
            return INITIAL_STATE;
        default:
            return state;
    }
}