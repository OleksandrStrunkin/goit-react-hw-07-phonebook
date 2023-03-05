import {createSlice} from "@reduxjs/toolkit";
import { fetchContacts, fetchAddContacts, fetchDeleteContacts } from "./contacts-operation";

const initialState ={
  items: [],
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
      [fetchContacts.pending]: (store)=>{
        store.isLoading = true;
      },
      [fetchContacts.fulfilled]: (store, {payload})=>{
        store.isLoading = false;
        store.items = payload;
      },
      [fetchContacts.rejected]: (store, {payload})=>{
        store.isLoading = false;
        store.error = payload;
      },
      [fetchAddContacts.pending]: (store)=>{
        store.isLoading = true;
      },
      [fetchAddContacts.fulfilled]: (store, {payload})=>{
        store.isLoading = false;
        store.items.unshift(payload);
      },
      [fetchAddContacts.rejected]: (store, {payload})=>{
        store.isLoading = false;
        store.error = payload;
      },
      [fetchDeleteContacts.pending]: (store)=>{
        store.isLoading = true;
      },
      [fetchDeleteContacts.fulfilled]: (store, {payload})=>{
        store.isLoading = false;
        const index = store.items.findIndex(item=> item.id === payload)
        store.items.splice(index, 1);
      },
      [fetchDeleteContacts.rejected]: (store, {payload})=>{
        store.isLoading = false;
        store.error = payload;
      }
    },
  });


// export const {addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;