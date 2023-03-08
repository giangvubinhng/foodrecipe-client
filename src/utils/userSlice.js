import userService from "../services/user.service"
const INITIAL_USER = {
    isLoggedIn: false,
}

export const createUserSlice = (set) => ({
    user: INITIAL_USER,
    fetchUser: (newUser) => set((state) => ({ user: newUser ?? INITIAL_USER })),
    fetchUserAsync: async () => {
        try{
            const result = await userService.fetchUserAsync();
            if(result.status !== 200){
                return set({user: INITIAL_USER})
            }
            return set({user: result.data.data.user})
        }catch(e){
                return set({user: INITIAL_USER})
        }
    },
    logout: async () => {
        try{
            await userService.logout();
            return set({user: INITIAL_USER})
        }catch(e){
            return set({user: INITIAL_USER})
        }
    }
})