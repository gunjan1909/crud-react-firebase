import React from "react";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionReference = collection(db, "users");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionReference, {
      name: newName,
      age: Number(newAge),
    });
  };

  const updateUser = async (id, age) => {
    const userDocReference = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDocReference, newFields);
  };

  const deleteUser = async (id) => {
    const userDocReference = doc(db, "users", id);
    await deleteDoc(userDocReference);
  };

  useEffect(
    () => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionReference);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
    }
    // ,[]
  );

  return (
    <div className={styles.App}>
      <h1>CRUD-Firebase-React</h1>
      <div className={styles.form}>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div>
      {users.map((user) => {
        return (
          <div className={styles.detail}>
            {" "}
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <div>
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
                style={{ margin: "1rem 1rem 0.25rem" }}
              >
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
                style={{ margin: "1rem 1rem 0.25rem" }}
                className={styles.danger}
              >
                Delete User
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
