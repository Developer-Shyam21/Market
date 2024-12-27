import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialUserData = [
    {
      key: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "+1 (555) 123-4567",
      accounttype: "Seller",
      channel: "Web",
      pandingreports: 3,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "+1 (555) 234-5678",
      accounttype: "-",
      channel: "Mobile",
      pandingreports: 5,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      mobile: "+1 (555) 345-6789",
      accounttype: "Seller",
      channel: "API",
      pandingreports: 0,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 4,
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      mobile: "+1 (555) 456-7890",
      accounttype: "Vendor",
      channel: "Web",
      pandingreports: 2,
      status: "Reviewed",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      mobile: "+1 (555) 567-8901",
      accounttype: "Seller",
      channel: "Mobile",
      pandingreports: 7,
      status: "Reviewed",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 6,
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      mobile: "+1 (555) 678-9012",
      accounttype: "Vendor",
      channel: "API",
      pandingreports: 1,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 7,
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      mobile: "+1 (555) 789-0123",
      accounttype: "Vendor",
      channel: "Web",
      pandingreports: 4,
      status: "Reviewed",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 8,
      name: "Laura Martinez",
      email: "laura.martinez@example.com",
      mobile: "+1 (555) 890-1234",
      accounttype: "Seller",
      channel: "Mobile",
      pandingreports: 6,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 9,
      name: "James Anderson",
      email: "james.anderson@example.com",
      mobile: "+1 (555) 901-2345",
      accounttype: "Seller",
      channel: "API",
      pandingreports: 8,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
    {
      key: 10,
      name: "Mary Harris",
      email: "mary.harris@example.com",
      mobile: "+1 (555) 012-3456",
      accounttype: "Vendor",
      channel: "Web",
      pandingreports: 0,
      status: "Under Review",
      switchuser: "Switch User",
      action: "Action",
    },
  ];
 const UserData = [
    {
      key: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "+1 (555) 123-4567",
      action: "Action",
    },
    {
      key: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "+1 (555) 234-5678",
      action: "Action",
    },
    {
      key: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      mobile: "+1 (555) 345-6789",
      action: "Action",
    },
    {
      key: 4,
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      mobile: "+1 (555) 456-7890",
      action: "Action",
    },
    {
      key: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      mobile: "+1 (555) 567-8901",
      action: "Action",
    },
    {
      key: 6,
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      mobile: "+1 (555) 678-9012",
      action: "Action",
    },
    {
      key: 7,
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      mobile: "+1 (555) 789-0123",
      action: "Action",
    },
    {
      key: 8,
      name: "Laura Martinez",
      email: "laura.martinez@example.com",
      mobile: "+1 (555) 890-1234",
      action: "Action",
    },
    {
      key: 9,
      name: "James Anderson",
      email: "james.anderson@example.com",
      mobile: "+1 (555) 901-2345",
      action: "Action",
    },
    {
      key: 10,
      name: "Mary Harris",
      email: "mary.harris@example.com",
      mobile: "+1 (555) 012-3456",
      action: "Action",
    },
  ];

const reducer = createSlice({
  name: "data",
  initialState: {
    data: initialUserData, // Initialize with the static data
  },
  reducers: {
    setData: (state, action) => {
      state.data.push(action.payload); // Adds new user
    },
    setDeleteData: (state, action) => {
      state.data = state.data.filter(i => i.key !== action.payload); 
    },
    setUpdateData: (state, action) => {
      const { key, updatedData } = action.payload;
      const index = state.data.findIndex(user => user.key === key);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedData }; // Updates the user data
      }
    },
  },
});

const userReducer = createSlice({
  name: "User",
  initialState: {
    user : []
  },
  reducers: {
    setUserData: (state,action) => {
      state.user.push(action.payload);
    }
  }
})

const AdminPage = createSlice({
  name: "AdminData",
  initialState: {
    AdminData: UserData
  },
  reducers:{
    setAdminData: (state,action ) => {
      state.AdminData.push(action.payload);
    }
     }
  
})
export const { setData, setDeleteData, setUpdateData } = reducer.actions;
export const {setUserData} = userReducer.actions;
export const {setAdminData} = AdminPage.actions

const store = configureStore({
  reducer: {
    reducer: reducer.reducer,
    userReducer: userReducer.reducer,
    AdminPage: AdminPage.reducer,  
  },
});

export default store;
