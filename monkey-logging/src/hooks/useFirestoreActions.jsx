import { addDoc, updateDoc, deleteDoc, doc, collection } from "firebase/firestore";
import { db } from "@/firebase-app/firebase-config";
import { useState } from "react";

export const useFirestoreActions = (collectionName) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const add = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const ref = await addDoc(collection(db, collectionName), data);
      return ref.id;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const update = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      await updateDoc(doc(db, collectionName, id), data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteDoc(doc(db, collectionName, id));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { add, update, remove, isLoading, error };
};
