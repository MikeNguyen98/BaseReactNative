import {tokenClear, tokenStorage} from 'src/utils/local.storage';
import {createAppSlice} from '../createAppSlice';
import {signIn} from './appAPI';

export interface AppSliceState {
  userToken: string | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AppSliceState = {
  userToken: null,
  status: 'idle',
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const appSlice = createAppSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    signin: create.asyncThunk(
      async () => {
        const response = await signIn();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      },
      {
        pending: state => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          tokenStorage({token: action.payload});
          state.userToken += action.payload;
        },
        rejected: state => {
          state.status = 'failed';
        },
      },
    ),
    restoreToken: create.asyncThunk(
      async () => {
        const response = await signIn();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      },
      {
        pending: state => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          tokenStorage({token: action.payload});
          state.userToken += action.payload;
        },
        rejected: state => {
          state.status = 'failed';
        },
      },
    ),
    signout: create.reducer(state => {
      state.userToken = null;
      tokenClear();
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectUserToken: app => app.userToken,
    selectStatus: app => app.status,
  },
});

// Action creators are generated for each case reducer function.
export const {signin, signout, restoreToken} = appSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {selectUserToken, selectStatus} = appSlice.selectors;
