'use strict';

const expenseForm = document.querySelector('#expense-form');
const expenseList = document.querySelector('#expense-list');
const categoryFilter = document.querySelector('#category-filter');
const totalSpending = document.querySelector('#total-spending');
const formError = document.querySelector('#form-error');

let expenses = JSON.parse(localStorage.getItem('pockettrack-expenses')) || [];

function saveExpenses() {
    localStorage.setItem('pockettrack-expenses', JSON.stringify(expenses));
}

function updateTotalSpending() {
    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    totalSpending.textContent = `KES ${total.toLocaleString()}`;
}

function renderExpenses() {
    const selectedCategory = categoryFilter.value;

    const filteredExpenses = selectedCategory === 'all'
        ? expenses
        : expenses.filter((expense) => expense.category === selectedCategory);

    if (filteredExpenses.length === 0) {
        expenseList.innerHTML = `
            <p class="empty-state">No expenses found.</p>
        `;
        return;
    }

    expenseList.innerHTML = filteredExpenses.map((expense) => `
        <article class="expense-item">
            <div>
                <h3>${expense.description}</h3>
                <p>${expense.category} · ${expense.date}</p>
            </div>

            <div class="expense-actions">
                <strong>KES ${expense.amount.toLocaleString()}</strong>

                <button
                    type="button"
                    class="delete-button"
                    data-id="${expense.id}"
                >
                    Delete
                </button>
            </div>
        </article>
    `).join('');
}

expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const description = document.querySelector('#description').value.trim();
    const amount = Number(document.querySelector('#amount').value);
    const category = document.querySelector('#category').value;
    const date = document.querySelector('#date').value;

    formError.textContent = '';

    if (!description) {
        formError.textContent = 'Please enter an expense description.';
        return;
    }

    if (!amount || amount <= 0) {
        formError.textContent = 'Please enter a valid expense amount.';
        return;
    }

    if (!category) {
        formError.textContent = 'Please select an expense category.';
        return;
    }

    if (!date) {
        formError.textContent = 'Please select an expense date.';
        return;
    }

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
    updateTotalSpending();

    expenseForm.reset();
});

expenseList.addEventListener('click', (event) => {
    if (!event.target.matches('.delete-button')) {
        return;
    }

    const expenseId = Number(event.target.dataset.id);

    expenses = expenses.filter((expense) => expense.id !== expenseId);

    saveExpenses();
    renderExpenses();
    updateTotalSpending();
});

categoryFilter.addEventListener('change', renderExpenses);

renderExpenses();
updateTotalSpending();