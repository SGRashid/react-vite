export type FormAction =
    | { type: APP_ACTIONS_TYPES.RESET_VALIDITY }
    | { type: APP_ACTIONS_TYPES.SET_VALIDITY_OK }
    | { type: APP_ACTIONS_TYPES.SET_VALIDITY_NOT_OK }
    | { type: APP_ACTIONS_TYPES.SET_TITLE, playload: string }
    | { type: APP_ACTIONS_TYPES.SET_DATE, playload: string }
    | { type: APP_ACTIONS_TYPES.SET_DATA, playload: string }
    | { type: APP_ACTIONS_TYPES.CLEAR_VALUES }

export const enum APP_ACTIONS_TYPES {
    RESET_VALIDITY = 'RESET_VALIDITY',
    SET_VALIDITY_OK = 'SET_VALIDITY_OK',
    SET_VALIDITY_NOT_OK = 'SET_VALIDITY_NOT_OK',
    SET_TITLE = 'SET_TITLE',
    SET_DATE = 'SET_DATE',
    SET_DATA = 'SET_DATA',
    CLEAR_VALUES = 'CLEAR_VALUES',
} 