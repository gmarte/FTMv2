// userStore.ts
import { create } from 'zustand';
import { account } from '@/appwrite';

// Define the UserState interface
interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    createUser: (email: string, password: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    loginWithOAuth: (provider: string) => Promise<void>;
    logOut: () => void;
}

// Create the Zustand store
export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (newUser: User) => set({ user: newUser}),
    createUser: async (email, password) => {
        try {
            const response = await account.create('', email, password);  // Assuming this returns User information
            set({ user: { ...response, session: null } });  // Setting session as null initially
        } catch (error) {
            console.error(error);
        }
    },
    loginUser: async (email, password) => {
        try {
            const session = await account.createEmailSession(email, password);
            const tmpUser = await account.get();
            set((state: UserState): Partial<UserState> => ({
                user: {
                    ...tmpUser,  // Preserve other user properties
                    session  // Update session property
                }
            }));
        } catch (error) {
            console.error(error);
        }
    },
    logOut: async() =>{
        try{
            await account.deleteSession("current");            
        }catch (error) {
            console.error(error);
          }
    },
    loginWithOAuth: async (provider) => {
        try {
            await account.createOAuth2Session(provider, 'http://localhost:3000/' , 'http://localhost:3000/auth/login' );
            // The user will be redirected for OAuth login, handle the response in your redirect URIs
            const session = await account.getSession('current');
            console.log(session);
            const tmpUser = await account.get();
            console.log(tmpUser);
            set((state) => ({
                user: {
                    ...tmpUser,  // Update user properties
                    session  // Update session property
                }
            }));
        } catch (error) {
            console.error(error);
        }
    },
}));