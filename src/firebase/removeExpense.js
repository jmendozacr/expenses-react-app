import { db } from './firebaseConfig';

const removeExpense = (id) => {
    db.collection('expenses').doc(id).delete();
}

export default removeExpense;