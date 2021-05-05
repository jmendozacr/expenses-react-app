import React, { useState } from 'react';
import { FilterContainer, Form, Input, LargeInput, ButtonContainer } from './../components/commons/ElementsForm';
import Button from './commons/Button';
import { ReactComponent as PlusIcon } from './../images/plus.svg'
import CategorySelect from './CategorySelect';
import DatePicker from './DatePicker';

const ExpenseForm = () => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [selectedOption, setSelectedOption] = useState("home");
    const [date, setDate] = useState(new Date());

    const onSubmitExpense = (e) => {
        e.preventDefault();
        console.log("Submit");
    }

    return (
        <Form onSubmit={onSubmitExpense}>
            <FilterContainer>
                <CategorySelect
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
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
