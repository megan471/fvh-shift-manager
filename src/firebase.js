import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, push, remove, update, onValue } from "firebase/database";

// -------------------------------------------------------
// REPLACE THESE VALUES WITH YOUR FIREBASE PROJECT CONFIG
// Go to: Firebase Console → Project Settings → Your Apps
// -------------------------------------------------------
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// -------------------------------------------------------
// DATABASE HELPERS
// -------------------------------------------------------

// SHIFTS
export const saveShift = (shift) => set(ref(db, `shifts/${shift.id}`), shift);
export const deleteShiftDb = (id) => remove(ref(db, `shifts/${id}`));
export const listenShifts = (callback) => onValue(ref(db, "shifts"), snap => {
  const data = snap.val();
  callback(data ? Object.values(data) : []);
});

// STANDBYS
export const saveStandby = (sb) => set(ref(db, `standbys/${sb.id}`), sb);
export const deleteStandbyDb = (id) => remove(ref(db, `standbys/${id}`));
export const listenStandbys = (callback) => onValue(ref(db, "standbys"), snap => {
  const data = snap.val();
  callback(data ? Object.values(data) : []);
});

// CLOCK EVENTS
export const saveClockEvent = (ev) => set(ref(db, `clockEvents/${ev.id}`), ev);
export const updateClockEvent = (id, updates) => update(ref(db, `clockEvents/${id}`), updates);
export const listenClockEvents = (callback) => onValue(ref(db, "clockEvents"), snap => {
  const data = snap.val();
  callback(data ? Object.values(data) : []);
});

// STAFF
export const saveStaffMember = (member) => set(ref(db, `staff/${member.id}`), member);
export const listenStaff = (callback) => onValue(ref(db, "staff"), snap => {
  const data = snap.val();
  callback(data ? Object.values(data) : []);
});

// RULES
export const saveRule = (rule) => set(ref(db, `rules/${rule.id}`), rule);
export const deleteRuleDb = (id) => remove(ref(db, `rules/${id}`));
export const listenRules = (callback) => onValue(ref(db, "rules"), snap => {
  const data = snap.val();
  callback(data ? Object.values(data) : []);
});
