'use strict';

const expenseForm = document.querySelector('#expense-form');
const expenseList = document.querySelector('#expense-list');

const expenses = JSON.parse(localStorage.getItem('pockettrack-expenses')) || [];

function saveExpenses() {
    localStorage.setItem('pockettrack-expenses', JSON.stringify(expenses));
}

function renderExpenses() {
    if (expenses.length === 0) {
        expenseList.innerHTML = `
            <p class="empty-state">No expenses recorded yet.</p>
        `;
        return;
    }

    expenseList.innerHTML = expenses.map((expense) => `
        <article class="expense-item">
            <div>
                <h3>${expense.description}</h3>
                <p>${expense.category} · ${expense.date}</p>
            </div>

            <strong>KES ${expense.amount.toLocaleString()}</strong>
        </article>
    `).join('');
}

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
    saveExpenses();

    renderExpenses();

    expenseForm.reset();
});

renderExpenses();