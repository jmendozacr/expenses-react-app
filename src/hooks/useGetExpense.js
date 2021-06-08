import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { db } from "../firebase/firebaseConfig";

const useGetExpense = (id) => {
    const [expense, setExpense] = useState('');
    const history = useHistory();

    useEffect(() => {
        db.collection('expenses').doc(id).get()
        .then((doc) => {
            if(doc.exists) {
                setExpense(doc);
            } else {
                history.push('/expenses');
            }
        })
    }, [history, id])

    return [expense];
}

export default useGetExpense;