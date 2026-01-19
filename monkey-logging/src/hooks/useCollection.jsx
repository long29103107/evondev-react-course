import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase-app/firebase-config";

export const useCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetch = async () => {
      try {
        const colRef = collection(db, collectionName);
        const snapshot = await getDocs(colRef);

        if (!isMounted) return;

        setData(
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetch();

    return () => {
      isMounted = false;
    };
  }, [collectionName]);

  return { data, isLoading, error };
};
