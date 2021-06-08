import { db } from './firebaseConfig';

const editExpense = ({ id, description, quantity, date, category }) => {
    return db.collection('expenses').doc(id).update({
        date,
        quantity: Number(quantity),
        description,
        category
    });
}

export default editExpense;