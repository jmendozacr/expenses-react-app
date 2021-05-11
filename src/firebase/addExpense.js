import { db } from './firebaseConfig';

const addExpense = ({ description, quantity, date, category, uidUser }) => {
    return db.collection('expenses').add({
        date,
        quantity,
        description,
        category,
        uidUser
    });
}

export default addExpense;