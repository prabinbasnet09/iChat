import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        recoveryEmail: '',
        birthDate: '',
        photos: [
            {
                id: 0,
                image: null,
            }, 
            {
                id: 1,
                image: null,
            }, 
            {
                id: 2,
                image: null,
            }, 
            {
                id: 3,
                image: null,
            }
        ],
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setRecoveryEmail: (state, action) => {
            state.recoveryEmail = action.payload;
        },
        setBirthDate: (state, action) => {
            state.birthDate = action.payload;
        },
        setPhotos: (state, action) => {
            const images = action.payload;
            images.map((image, index) => {
                state.photos[index].image = image.image;
            })
        }
    }
})

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});

export const { setFirstName, setLastName, setRecoveryEmail, setBirthDate, setPhotos } = userSlice.actions;

export default userSlice.reducer;