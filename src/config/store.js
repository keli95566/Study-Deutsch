import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import { defaultState, rootReducer } from './reducer';

const migrations = {
  0: state => ({
    ...state,

  }),
};

const storage = createSensitiveStorage({
  encrypt: true,
  keychainService: 'StudDeutsch',
  sharedPreferencesName: 'StudDeutsch',
});

const persistConfig = {
  key: 'StudDeutsch',
  version: 1,
  storage,
  migrate: createMigrate(migrations, { debug: false }),
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  defaultState,
    process.env.NODE_ENV === 'production'
    ? undefined
    : applyMiddleware(createLogger()),  
);

const persistor = persistStore(store);

export { persistor, store };
