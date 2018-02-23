import {createAction, handleAction} from 'redux-actions';

/** Actions */
export const actAddCount = createAction('addCunt');
export const actWho = createAction('who');

/** Reducers */
export const count = handleAction('addCunt', (state, action) => action.payload, 0);
export const user = handleAction('who', (state, action) => action.payload, '');