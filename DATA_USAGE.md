# Data Usage Guide

Quick reference for working with transactions and user data in FaithFinance.

---

## Data Structures

### Transaction
```typescript
{
  id: string,              // "12345"
  userId: string,          // Owner ID
  type: 'income' | 'spending' | 'giving',
  amount: number,          // 125.50
  category: string,        // "Groceries", "Rent", etc.
  description: string,     // "Weekly shopping"
  date: string,            // "2025-12-03" (YYYY-MM-DD)
  createdAt: string        // ISO timestamp
}
```

### User
```typescript
{
  id: string,              // "12345"
  name: string,            // "John Doe"
  email: string,           // "john@example.com"
  createdAt: string        // ISO timestamp
}
```

---

## Using the useData Hook

### Import
```typescript
import { useData } from '../context/DataContext';
```

### Basic Usage
```typescript
const MyComponent = () => {
  const { 
    currentUser,          // Current user profile
    transactions,         // All user's transactions
    addTransaction,       // Add new transaction
    getTotalByType        // Calculate totals
  } = useData();
  
  // Use data...
}
```

---

## Common Operations

### Add Transaction
```typescript
await addTransaction(
  'spending',              // type
  25.50,                   // amount
  'Dining out',            // category
  'Lunch with friends',    // description
  '2025-12-03'            // date
);
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

### Get Totals
```typescript
const income = getTotalByType('income');
const spending = getTotalByType('spending');
const giving = getTotalByType('giving');
```

### Filter Transactions
```typescript
// By type
const spendingList = transactions.filter(t => t.type === 'spending');

// By category
const groceries = getTransactionsByCategory('Groceries');

// By date range
const thisMonth = transactions.filter(t => 
  t.date.startsWith('2025-12')
);
```

---

## Available Functions

### State
- `currentUser` - Current user profile
- `transactions` - All user transactions
- `isLoading` - Loading state

### User Actions
- `setCurrentUser(user)` - Switch user
- `createUser(name, email)` - Create user

### Transaction Actions
- `addTransaction(type, amount, category, description, date)` - Add
- `updateTransaction(transaction)` - Update
- `deleteTransaction(id)` - Delete

### Query Helpers
- `getTotalByType(type)` - Sum by income/spending/giving
- `getTransactionsByType(type)` - Filter by type
- `getTransactionsByCategory(category)` - Filter by category

### Data Management
- `clearAllData()` - Clear all data
- `loadMockData()` - Load demo data

---

## Example: Display Spending Total

```typescript
import { useData } from '../context/DataContext';

const SpendingSummary = () => {
  const { getTotalByType } = useData();
  
  const total = getTotalByType('spending');
  
  return <Text>${total.toFixed(2)}</Text>;
};
```

## Example: Add New Transaction

```typescript
const AddExpense = () => {
  const { addTransaction } = useData();
  
  const handleSubmit = async () => {
    await addTransaction(
      'spending',
      50.00,
      'Groceries',
      'Weekly shopping',
      new Date().toISOString().split('T')[0]
    );
  };
  
  return <Button title="Add" onPress={handleSubmit} />;
};
```

---

## Storage Keys

Data persists in AsyncStorage:
- `@ff:currentUser` - Active user ID
- `@ff:transactions` - All transactions
- `@ff:profileName` - Display name
- `@ff:favorites` - Favorite verses
- `@ff:faithGoal` - Giving goal

---

**See [SETUP.md](SETUP.md) for installation details.**
