// userStore.ts
import { create } from 'zustand';
import { account } from '@/appwrite';

// Define the UserState interface
interface UserState {
    user: User | null;
    createUser: (email: string, password: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    loginWithOAuth: (provider: string) => Promise<void>;
}

// Create the Zustand store
export const useUserStore = create<UserState>((set) => ({
    user: null,
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
    
    loginWithOAuth: async (provider) => {
        try {
            await account.createOAuth2Session(provider, 'http://localhost:3000/' , 'http://localhost:3000/auth' );
            // The user will be redirected for OAuth login, handle the response in your redirect URIs
            const session = await account.getSession('current');
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
}));