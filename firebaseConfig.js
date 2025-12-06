
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0-h75n4T5VfRRtoJGLscg6_XBbhVJlq0",
  authDomain: "accessiblehubapp.firebaseapp.com",
  projectId: "accessiblehubapp",
  storageBucket: "accessiblehubapp.firebasestorage.app",
  messagingSenderId: "499498946357",
  appId: "1:499498946357:web:69b6de9b464ee5cff3867c",
  measurementId: "G-9QDFWE15RH",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
