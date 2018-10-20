import { handleActions, createAction } from 'redux-actions';

const initialState = {
  typingStatus: 'none',   // typing, done, none
  word: '',
}

const TYPING_DONE = 'TYPING_DONE';
const TYPING_ING = 'TYPING_ING';
const TYPING_NONE = 'TYPING_NONE';

export const typingDone = createAction(TYPING_DONE);
export const typingIng = createAction(TYPING_ING);    // payload: word
export const typingNone = createAction(TYPING_NONE);

export default handleActions({
  [TYPING_DONE]: (state) => ({
    ...state,
    typingStatus: 'done',
  }),
  [TYPING_ING]: (state, action) => ({
    ...state,
    typingStatus: 'typing',
    word: action.payload,
  }),
  [TYPING_NONE]: (state) => ({
    ...state,
    typingStatus: 'none',
    word: '',
  })
}, initialState)