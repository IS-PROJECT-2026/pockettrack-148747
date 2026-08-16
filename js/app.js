'use strict';

const expenseForm = document.querySelector('#expense-form');

const expenses = [];

expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const description = document.querySelector('#description').value.trim();
    const amount = Number(document.querySelector('#amount').value);
    const category = document.querySelector('#category').value;
    const date = document.querySelector('#date').value;

    const expense = {
        id: Date.now(),
        description,
        amount,
        category,
        date
    };

    expenses.push(expense);

    console.log('Expense added:', expense);
    console.log('All expenses:', expenses);

    expenseForm.reset();
});