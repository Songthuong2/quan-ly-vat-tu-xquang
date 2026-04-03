import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

// Thêm dòng dưới đây để cấm ESLint báo lỗi "any"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const db = (getFirestore as any)(app, firebaseConfig.firestoreDatabaseId);

export const auth = getAuth();