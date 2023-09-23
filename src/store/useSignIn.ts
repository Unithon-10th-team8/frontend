import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SignInState {
  isSignedIn: boolean;
  setSignIn: (isSignedIn: boolean) => void;
}

// Example
const useSignIn = create<SignInState>()(
  devtools((set) => ({
    isSignedIn: false,
    setSignIn: (isSignedIn) => set(() => ({ isSignedIn })),
  })),
);

export default useSignIn;
