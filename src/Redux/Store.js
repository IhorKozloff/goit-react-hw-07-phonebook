import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
//state
export const phonebookStore = configureStore({

  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), contactsApi.middleware],
});




// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const initialState = { items: [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ], filter: ''};

  

// const phoneBookSlice = createSlice({
//   name: "contacts",
//   initialState,
//   reducers : {
//     addContacts (state, action) {
//       state.items.push(action.payload);
//     },
//     removeContact (state, actions) {
//       state.items = state.items.filter(item => item.id !== actions.payload);
//     },
//     setFilter (state, actions) {
//       state.filter = actions.payload;
//     },
//   }
// })



// export const getContacts = state => state.contacts.items;
// export const getFilterStatus = state => state.contacts.filter;

// //actions
// export const { addContacts, removeContact, setFilter } = phoneBookSlice.actions;


//persist
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedPhonebookReducer = persistReducer(persistConfig, phoneBookSlice.reducer)





// export const persistor = persistStore(phonebookStore)



