import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../components/commons/BackButton';
import TotalBar from '../components/TotalBar';
import useGetExpenses from '../hooks/useGetExpenses';
import  { Header, Title } from './../components/commons/Header';
import { 	List,
            ElementList,
            Category,
            Description,
            Value,
            Date,
            ButtonContainer,
            ButtonAction,
            ButtonLoadMore,
            ContainerCentralButton,
            ContainerSubtitle,
            Subtitle
} from '../components/ElementList';
import CategoryIcon from '../components/commons/CategoryIcons';
import convertToCurrency from '../utils/convertToCurrency';
import { ReactComponent as EditIcon } from './../images/editar.svg';
import { ReactComponent as DeleteIcon } from './../images/borrar.svg';
import { Link } from 'react-router-dom';
import Button from './../components/commons/Button';
import { format, fromUnixTime } from 'date-fns';
import removeExpense from '../firebase/removeExpense';

const ExpensesList = () => {
    const [expenses, getMoreExpenses, loadMoreValidation] = useGetExpenses();

    const formatDate = date => {
        return format(fromUnixTime(date), 'MMM dd yyyy');
    }

    const equalDate = (expensesList, index, expense) => {
        if(index !== 0) {
            const currentDate = formatDate(expense.date);
            const previewExpenseDate = formatDate(expensesList[index-1].date);

            if(currentDate === previewExpenseDate) {
                return true;
            } else {
                return false;
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Expenses</title>
            </Helmet>

            <Header>
                <BackButton/>
                <Title>
                    Expenses page
                </Title>
            </Header>

            <List>
                {
                    expenses.map((item, i) => {
                        return(
                            <div key={i}>
                                { !equalDate(expenses, i, item) && <Date>{ formatDate(item.date) }</Date> }
                                <ElementList>
                                    <Category>
                                        <CategoryIcon name={item.category.toLowerCase()}/>
                                        {item.category}
                                    </Category>

                                    <Description>
                                        {item.description}
                                    </Description>

                                    <Value>
                                        {convertToCurrency(item.quantity)}
                                    </Value>

                                    <ButtonContainer>
                                        <ButtonAction as={Link} to={`/edit/${item.id}`}>
                                            <EditIcon/>
                                        </ButtonAction>
                                        <ButtonAction onClick={() => removeExpense(item.id)}>
                                            <DeleteIcon/>
                                        </ButtonAction>
                                    </ButtonContainer>
                                </ElementList>
                            </div>
                        )
                    })
                }

                {
                    loadMoreValidation &&
                    <ContainerCentralButton>
                        <ButtonLoadMore onClick={() => getMoreExpenses()}>
                            Load More
                        </ButtonLoadMore>
                    </ContainerCentralButton>
                }

                {
                    expenses.length === 0 &&
                        <ContainerSubtitle>
                            <Subtitle>
                                There is no expense to show
                            </Subtitle>
                            <Button as={Link} to='/'>
                                Add expense
                            </Button>
                        </ContainerSubtitle>
                }
            </List>
            <TotalBar/>
        </>
    );
}

export default ExpensesList;