import React, { useState } from 'react';
import { getUnixTime } from 'date-fns';
import { fromUnixTime } from 'date-fns';
import { FilterContainer, Form, Input, LargeInput, ButtonContainer } from './../components/commons/ElementsForm';
import Button from './commons/Button';
import { ReactComponent as PlusIcon } from './../images/plus.svg'
import CategorySelect from './CategorySelect';
import DatePicker from './DatePicker';
import addExpense from '../firebase/addExpense';
import { useAuth } from '../context/authContext';

const ExpenseForm = () => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("home");
    const [date, setDate] = useState(new Date());
    const { user } = useAuth();

    const onSubmitExpense = (e) => {
        e.preventDefault();
        let quantityFixed = parseFloat(quantity).toFixed(2);

        addExpense({
            date: getUnixTime(date),
            quantity: quantityFixed,
            description,
            category,
            uidUser: user.uid
        });
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
                    Add Expense <PlusIcon/>
                </Button>
            </ButtonContainer>
        </Form>
    );
}

export default ExpenseForm;
