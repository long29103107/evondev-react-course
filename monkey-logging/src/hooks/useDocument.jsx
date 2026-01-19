import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase-app/firebase-config";
import { useState, useEffect } from "react";

export const useDocument = (collectionName, id) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const fetch = async () => {
      try {
        const ref = doc(db, collectionName, id);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          throw new Error('DOCUMENT_NOT_FOUND');
        }

        if (!isMounted) return;

        setData({ id: snap.id, ...snap.data() });
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
  }, [collectionName, id]);

  return { data, isLoading, error };
};