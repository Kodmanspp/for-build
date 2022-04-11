import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { newCollectionReducer } from './slice/newCollection.slice';

const store = configureStore({
  reducer: {
    newCollection: newCollectionReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        'persist/PERSIST',
        'persist/REHYDRATE',
        'pause/PAUSE',
        '/purge/PURGE',
        '/register/REGISTER',
      ],
    },
  }),
});

export const persistor = persistStore(store);

export default store;
