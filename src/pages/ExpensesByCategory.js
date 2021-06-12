import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../components/commons/BackButton';
import CategoryIcon from '../components/commons/CategoryIcons';
import TotalBar from '../components/TotalBar';
import useGetExpensesByMonthAndCategories from '../hooks/useGetExpensesByMonthAndCategories';
import convertToCurrency from '../utils/convertToCurrency';
import  { Header, Title } from './../components/commons/Header';
import { CategoryList, ElementCategoryList, Category, Value } from './../components/ElementList';

const ExpensesByCategory = () => {
    const expensesByCategory = useGetExpensesByMonthAndCategories();

    return (
        <>
            <Helmet>
                <title>Expenses by Category</title>
            </Helmet>

            <Header>
                <BackButton/>
                <Title>
                    Expenses by category page
                </Title>
            </Header>

            <CategoryList>
                {
                    expensesByCategory.map((item, i) => {
                        return(
                            <ElementCategoryList key={i}>
                                <Category>
                                    <CategoryIcon name={item.category}/>
                                    {item.category}
                                </Category>
                                <Value>{convertToCurrency(item.quantity)}</Value>
                            </ElementCategoryList>
                        )
                    })
                }
            </CategoryList>
            <TotalBar/>
        </>
    );
}

export default ExpensesByCategory;