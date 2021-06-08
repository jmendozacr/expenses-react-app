import React, { useEffect, useState } from 'react';
import { getUnixTime } from 'date-fns';
import { fromUnixTime } from 'date-fns';
import { FilterContainer, Form, Input, LargeInput, ButtonContainer } from './../components/commons/ElementsForm';
import Button from './commons/Button';
import { ReactComponent as PlusIcon } from './../images/plus.svg'
import CategorySelect from './CategorySelect';
import DatePicker from './DatePicker';
import addExpense from '../firebase/addExpense';
import editExpense from '../firebase/editExpense';
import { useAuth } from '../context/authContext';
import Alert from './commons/Alert';
import { useHistory } from 'react-router';

const ExpenseForm = ({ expense }) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("home");
    const [date, setDate] = useState(new Date());
    const { user } = useAuth();
    const [alertState, setAlertState] = useState(false);
    const [alert, setAlert] = useState({});
    const history = useHistory();

    useEffect(() => {
        if(expense) {
            if(expense.data().uidUser === user.uid) {
                setCategory(expense.data().category);
                setDate(fromUnixTime(expense.data().date));
                setDescription(expense.data().description);
                setQuantity(parseFloat(expense.data().quantity).toFixed(2));
            } else {
                history.push("/expenses");
            }
        }
    }, [expense, user, history])

    const onSubmitExpense = (e) => {
        e.preventDefault();
        let quantityFloat = parseFloat(quantity).toFixed(2);

        if(description !== '' && quantity !== ''){
            if(quantityFloat) {
                if(expense) {
                    console.log("if expense", expense);
                    editExpense({
                        id: expense.id,
                        date: getUnixTime(date),
                        description,
                        quantity,
                        category,
                    }).then(() => {
                        history.push("/expenses");
                    }).catch((error) => {
                        console.log('error', error);
                    })
                } else {
                    addExpense({
                        date: getUnixTime(date),
                        quantity: quantityFloat,
                        description,
                        category,
                        uidUser: user.uid
                    }).then(()=> {
                        setDescription("");
                        setQuantity("");
                        setDate(new Date());
                        setCategory("home");
                        setAlertState(true);
                        setAlert({ type: 'success', message: "The expense was added correctly."});
                    }).catch((error) => {
                        setAlertState(true);
                        setAlert({ type: 'error', message: error})
                    });
                }
            } else {
                setAlertState(true);
                setAlert({ type: 'error', message: "The entered value is not correct." });
            }
        }
        else {
            setAlertState(true);
            setAlert({ type: 'error', message: "Please fill all the fields." });
        }
    }

    return (
        <Form onSubmit={onSubmitExpense}>
            <FilterContainer>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                />
                <DatePicker
                    date={date}
                    setDate={setDate}
                />
            </FilterContainer>
            <div>
                <Input 
                    type="text" 
                    name="description" 
                    id="description" 
                    placeholder="Expense description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}    
                />
                <LargeInput 
                    type="text" 
                    name="value" 
                    id="value" 
                    placeholder="$0.00"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value.replace(/[^0-9.]/g, ""))}
                />
            </div>
            <ButtonContainer>
                <Button as="button" primary withIcon type="submit">
                    {!expense ? "Add Expense" : "Edit Expense"} <PlusIcon/>
                </Button>
            </ButtonContainer>
            <Alert type={alert.type} message={alert.message} alertState={alertState} setAlertState={setAlertState}/>
        </Form>
    );
}

export default ExpenseForm;
