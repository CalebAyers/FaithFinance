# Data Storage Usage Guide

Quick guide for using the data storage system in FaithFinance.

## Installation
```bash
npm install @react-native-async-storage/async-storage
```

## Data Types

**Transaction:**
```typescript
{
  id: string,              // 5-digit number (e.g., "12345")
  userId: string,          // User who owns this transaction
  type: 'income' | 'spending' | 'giving',
  amount: number,
  category: string,
  description: string,
  date: string,            // Format: YYYY-MM-DD
  createdAt: string        // ISO timestamp
}
```

**User:**
```typescript
{
  id: string,              // 5-digit number
  name: string,
  email: string,
  createdAt: string        // ISO timestamp
}
```

## Using in Components

### Import the hook
```typescript
import { useData } from '../context/DataContext';
```

### Access data in your component
```typescript
const MyComponent = () => {
  const { 
    currentUser,          // Current user profile
    transactions,         // All transactions for current user
    isLoading,            // Loading state
    addTransaction,       // Add new transaction
    getTotalByType        // Get totals by type
  } = useData();
  
  // Your code...
}
```

## Common Operations

### Add Transaction
```typescript
await addTransaction(
  'spending',              // type
  25.50,                   // amount
  'Dining out',            // category
  'Lunch',                 // description
  '2025-12-03'            // date
);
```

### Get Totals
```typescript
const totalIncome = getTotalByType('income');
const totalSpending = getTotalByType('spending');
const totalGiving = getTotalByType('giving');
```

### Filter Transactions
```typescript
const spending = transactions.filter(t => t.type === 'spending');
const groceries = getTransactionsByCategory('Groceries');
```

### Update Transaction
```typescript
const updated = { ...transaction, amount: 100 };
await updateTransaction(updated);
```

### Delete Transaction
```typescript
await deleteTransaction(transactionId);
```

## Example Component

```typescript
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useData } from '../context/DataContext';

const SpendingSummary = () => {
  const { transactions, getTotalByType, addTransaction } = useData();
  
  const spending = getTotalByType('spending');
  const income = getTotalByType('income');
  
  const handleAdd = async () => {
    await addTransaction(
      'spending',
      50.00,
      'Groceries',
      'Weekly shopping',
      new Date().toISOString().split('T')[0]
    );
  };
  
  return (
    <View>
      <Text>Spending: ${spending.toFixed(2)}</Text>
      <Text>Income: ${income.toFixed(2)}</Text>
      <Text>Transactions: {transactions.length}</Text>
      <Button title="Add Expense" onPress={handleAdd} />
    </View>
## Available Functions

**State:**
- `currentUser` - Current user profile
- `transactions` - All transactions for current user
- `isLoading` - Loading state

**User Actions:**
- `setCurrentUser(user)` - Switch active user
- `createUser(name, email)` - Create new user profile

**Transaction Actions:**
- `addTransaction(type, amount, category, description, date)` - Add new transaction
- `updateTransaction(transaction)` - Update existing transaction
- `deleteTransaction(transactionId)` - Delete transaction
- `refreshTransactions()` - Reload from storage

**Query Helpers:**
- `getTransactionsByType(type)` - Filter by income/spending/giving
- `getTransactionsByCategory(category)` - Filter by category
- `getTotalByType(type)` - Calculate sum for type

**Data Management:**
- `clearAllData()` - Clear all user transactions
- `loadMockData()` - Load sample data for testing

## Utility Functions
Import from `utils/transactionUtils.ts`:

- `formatCurrency(amount)` - Format as $1,234.56
- `formatDate(date)` - Format as YYYY-MM-DD
- `sortTransactionsByDate(transactions)` - Sort newest first
- `groupTransactionsByCategory(transactions)` - Group by category
- `calculateTotals(transactions)` - Calculate income/spending/giving/net
- `getTransactionsForPeriod(transactions, period)` - Filter by daily/weekly/monthly/yearly

## Categories

**Income (5):** Salary, Part-time Job, Freelance, Gift, Other

**Spending (26):** Dining out, Groceries, Coffee & Snacks, Transportation, Gas, Parking, Housing, Rent, Utilities, Internet, Textbooks, School Supplies, Tuition, Health & Wellness, Gym Membership, Healthcare, Pharmacy, Entertainment, Movies & Streaming, Concerts & Events, Hobbies, Shopping, Clothing, Electronics, Personal Care, Other

**Giving (5):** Church, Ministry, Charity, Community Outreach, Other

## Mock Data

Load sample transactions for testing:
```typescript
const { loadMockData } = useData();

// Load 18 sample transactions (3 income, 11 spending, 4 giving)
await loadMockData();
```

Sample data includes realistic transactions from Nov 15 - Dec 3, 2025.

## Data Persistence

All data saves to AsyncStorage automatically and persists between app sessions.

**Storage Keys:**
- `@faithfinance_current_user` - Active user
- `@faithfinance_users` - All registered users
- `@faithfinance_transactions` - All transactions by user ID
await StorageService.clearAllData();
```
