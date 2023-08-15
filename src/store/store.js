import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { workersReducer } from './reducers/workers.reducer';
import { authReducer } from './reducers/auth.reducer';

import rootSaga from './sagas/root.saga'; // корневая сага
import { workerReducer } from './reducers/worker.reducer';
import { compReducer } from './reducers/comp.reducer';

const sagaMidleWare = createSagaMiddleware(); // создаем сагу

console.log('workerReducer ====> ', workerReducer);

const store = configureStore({
  reducer: { // объект с ключом reducer - аналог root reducer
    auth: authReducer,
    workers: workersReducer,
    worker: workerReducer,
    comp: compReducer,
  },
  middleware: (mid) => [...mid(), sagaMidleWare], // к массиву всех мидлвар добавляем saga
})

sagaMidleWare.run(rootSaga); // запускаем сагу

export default store;
