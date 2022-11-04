import { text } from 'express';
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content, id) => {
  const textDB = await openDB('jate', 1);
  const store = tx.objectStore('jate');
  const req = store.put({
    id: id,
    jate: content,
  });
  const res = await req;
  const transaction = textDB.transaction('jate', 'readwrite');
};

export const getDb = async () => {
  const textDB = await openDB('jate', 1);
  const store = tx.objectStore('jate');
  const req = store.put({
    id: id,
    jate: content,
  });
  const res = await req;
  const transaction = textDB.transaction('jate', 'readonly');
};

initdb();
