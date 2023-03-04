import {create} from 'zustand';

const INITIAL_USER = {
    isLoggedIn: false,
}
export const useUserStore = create((set) => {
    user: INITIAL_USER
})