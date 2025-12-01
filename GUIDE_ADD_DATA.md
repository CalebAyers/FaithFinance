# FaithFinance - Adding Real Data Guide

This guide explains how to connect your FaithFinance app to real data sources (API, Firebase, etc.) when you're ready.

## 🎯 Overview

Currently, the app uses **mock data** (hardcoded sample values) to display the UI. All screens are designed to make it easy to replace this mock data with real data from your backend API or database.

## 📊 Where Mock Data Lives

### **1. HomePage** (`screens/HomePage.tsx`)
**Mock Data Location:** Lines 27-30 in the Transaction list
```tsx
<Transaction category="Giving" prop="-$100.00" />
<Transaction category="Spending" prop="-$50.00" />
<Transaction category="Income" prop="+$500.00" />
<Transaction category="Giving" prop="-$25.00" />
```

**How to Add Real Data:**
```tsx
// Add state and API call
const [transactions, setTransactions] = useState([]);

useEffect(() => {
  fetch('YOUR_API_URL/transactions/recent')
    .then(res => res.json())
    .then(data => setTransactions(data));
}, []);

// Replace hardcoded transactions with:
{transactions.map(txn => (
  <Transaction 
    key={txn.id}
    category={txn.category} 
    prop={txn.amount} 
  />
))}
```

### **2. InsightPage** (`screens/InsightPage.tsx`)
**Mock Data Location:** Lines 23-32 - Single `mockData` object
```tsx
const mockData = {
  totalIncome: 1000,
  totalGiving: 150,
  spendingCategories: [
    { name: "Transportation", value: 320 },
    { name: "Food", value: 240 },
    { name: "Entertainment", value: 100 },
  ],
};
```

**How to Add Real Data:**
```tsx
// Replace mockData with state and API call
const [insightsData, setInsightsData] = useState(null);

useEffect(() => {
  // Fetch data based on selected period
  fetch(`YOUR_API_URL/insights?period=${selectedPeriod}`)
    .then(res => res.json())
    .then(data => setInsightsData(data));
}, [selectedPeriod]); // Re-fetch when period changes

// Change mockData to insightsData throughout the component
// All calculations, charts, and displays will automatically update!
```

**Why This Is Easy:**
- All values are calculated dynamically from the data object
- Charts automatically update when data changes
- Just replace the object structure and everything works!

### **3. TransactionPage** (`screens/TransactionPage.tsx`)
**Mock Data Location:** Lines 21-39 - Three separate arrays
```tsx
const incomingTransactions = [
  { category: "Income", prop: "+$500.00" },
  { category: "Income", prop: "+$200.00" },
];

const spendingTransactions = [
  { category: "Spending", prop: "-$50.00" },
  { category: "Spending", prop: "-$30.00" },
];

const givingTransactions = [
  { category: "Giving", prop: "-$100.00" },
  { category: "Giving", prop: "-$25.00" },
];
```

**How to Add Real Data:**
```tsx
// Add state for each transaction type
const [incomingTransactions, setIncomingTransactions] = useState([]);
const [spendingTransactions, setSpendingTransactions] = useState([]);
const [givingTransactions, setGivingTransactions] = useState([]);

useEffect(() => {
  // Fetch all transactions
  fetch('YOUR_API_URL/transactions')
    .then(res => res.json())
    .then(data => {
      // Filter by type on client or request filtered data from API
      setIncomingTransactions(data.filter(t => t.type === 'income'));
      setSpendingTransactions(data.filter(t => t.type === 'spending'));
      setGivingTransactions(data.filter(t => t.type === 'giving'));
    });
}, []);

// Lists will automatically update!
```

### **4. TransactionDetailPage** (`screens/TransactionDetailPage.tsx`)
**Mock Data Location:** Lines 20-34 - Single array with all transactions
```tsx
const allTransactions = [
  { id: "1", category: "Transportation", amount: "-$50.00", date: "2024-01-15" },
  { id: "2", category: "Food", amount: "-$30.00", date: "2024-01-14" },
  // ... more transactions
];
```

**How to Add Real Data:**
```tsx
const [allTransactions, setAllTransactions] = useState([]);

useEffect(() => {
  fetch('YOUR_API_URL/transactions/detailed')
    .then(res => res.json())
    .then(data => setAllTransactions(data));
}, []);

// Search and sort will work automatically!
```

## 🔌 API Integration Steps

### **Step 1: Set Up Your Backend**
Choose a backend solution:
- **Firebase** (easiest for beginners)
- **REST API** (Node.js, Python Flask/Django, etc.)
- **GraphQL API**
- **Supabase** (Firebase alternative)

### **Step 2: Create API Service File**
Create `services/api.ts`:
```tsx
const API_BASE_URL = 'https://your-api.com';

export const fetchInsights = async (period: string) => {
  const response = await fetch(`${API_BASE_URL}/insights?period=${period}`);
  if (!response.ok) throw new Error('Failed to fetch insights');
  return response.json();
};

export const fetchTransactions = async () => {
  const response = await fetch(`${API_BASE_URL}/transactions`);
  if (!response.ok) throw new Error('Failed to fetch transactions');
  return response.json();
};

export const addTransaction = async (transaction: any) => {
  const response = await fetch(`${API_BASE_URL}/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) throw new Error('Failed to add transaction');
  return response.json();
};
```

### **Step 3: Use API in Screens**
Example for InsightPage:
```tsx
import { fetchInsights } from '../services/api';

const InsightPage = () => {
  const [insightsData, setInsightsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchInsights(selectedPeriod)
      .then(data => {
        setInsightsData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedPeriod]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  
  // Use insightsData instead of mockData
  // All calculations and charts update automatically!
};
```

## 📋 Expected API Response Formats

### **Insights Endpoint**
`GET /insights?period=Monthly`
```json
{
  "totalIncome": 1000,
  "totalGiving": 150,
  "spendingCategories": [
    { "name": "Transportation", "value": 320 },
    { "name": "Food", "value": 240 },
    { "name": "Entertainment", "value": 100 }
  ]
}
```

### **Transactions Endpoint**
`GET /transactions`
```json
{
  "incoming": [
    { "id": "1", "category": "Income", "amount": "+$500.00", "date": "2024-01-15" }
  ],
  "spending": [
    { "id": "2", "category": "Spending", "amount": "-$50.00", "date": "2024-01-14" }
  ],
  "giving": [
    { "id": "3", "category": "Giving", "amount": "-$100.00", "date": "2024-01-13" }
  ]
}
```

### **Transaction Detail Endpoint**
`GET /transactions/detailed`
```json
[
  {
    "id": "1",
    "category": "Transportation",
    "amount": "-$50.00",
    "date": "2024-01-15",
    "description": "Gas station"
  }
]
```

## ✅ Checklist for Adding Real Data

- [ ] Set up backend (Firebase, REST API, etc.)
- [ ] Create API service file (`services/api.ts`)
- [ ] Define API endpoints for:
  - [ ] Insights data (with period filtering)
  - [ ] Transactions list (by type)
  - [ ] Detailed transactions
  - [ ] Add/Edit/Delete transactions
  - [ ] User authentication
- [ ] Replace mock data with API calls:
  - [ ] HomePage
  - [ ] InsightPage
  - [ ] TransactionPage
  - [ ] TransactionDetailPage
- [ ] Add loading states
- [ ] Add error handling
- [ ] Test with real data

## 🎯 Why This Structure Works

**Benefits:**
- ✅ **Centralized Data**: One place to update in each screen
- ✅ **Dynamic Calculations**: Everything recalculates automatically
- ✅ **Easy Testing**: Use mock data while building, swap to real later
- ✅ **Type Safety**: TypeScript ensures correct data structure
- ✅ **Reusable Components**: Components work with any data source

**When You're Ready:**
1. Build your backend API
2. Create API service functions
3. Replace `mockData` objects with `useState` + API calls
4. Everything else just works! 🎉
