import { Transaction, UserProfile } from './services/StorageService';

// Sample user profile for testing
export const mockUser: UserProfile = {
  id: "12345",
  name: "Alex Johnson",
  email: "alex@faithfinance.com",
  createdAt: "2025-11-01T08:00:00.000Z"
};

// Sample transactions for testing (5 income, 15 spending, 5 giving)
export const mockTransactions: Transaction[] = [
  // Income transactions
  {
    id: "10001",
    userId: "12345",
    type: "income",
    amount: 2000.00,
    category: "Salary",
    description: "Monthly paycheck",
    date: "2025-12-01",
    createdAt: "2025-12-01T09:00:00.000Z"
  },
  {
    id: "10002",
    userId: "12345",
    type: "income",
    amount: 150.00,
    category: "Part-time Job",
    description: "Weekend tutoring",
    date: "2025-11-28",
    createdAt: "2025-11-28T18:00:00.000Z"
  },
  {
    id: "10003",
    userId: "12345",
    type: "income",
    amount: 50.00,
    category: "Gift",
    description: "Birthday money from grandma",
    date: "2025-11-20",
    createdAt: "2025-11-20T12:00:00.000Z"
  },
  {
    id: "10004",
    userId: "12345",
    type: "income",
    amount: 300.00,
    category: "Freelance",
    description: "Website design project",
    date: "2025-11-25",
    createdAt: "2025-11-25T16:00:00.000Z"
  },
  {
    id: "10005",
    userId: "12345",
    type: "income",
    amount: 75.00,
    category: "Part-time Job",
    description: "Library assistant shift",
    date: "2025-11-22",
    createdAt: "2025-11-22T19:00:00.000Z"
  },
  
  // Spending transactions
  {
    id: "20001",
    userId: "12345",
    type: "spending",
    amount: 850.00,
    category: "Rent",
    description: "December rent",
    date: "2025-12-01",
    createdAt: "2025-12-01T10:00:00.000Z"
  },
  {
    id: "20002",
    userId: "12345",
    type: "spending",
    amount: 120.00,
    category: "Utilities",
    description: "Electric and water bill",
    date: "2025-12-01",
    createdAt: "2025-12-01T10:30:00.000Z"
  },
  {
    id: "20003",
    userId: "12345",
    type: "spending",
    amount: 65.00,
    category: "Groceries",
    description: "Weekly shopping at Trader Joes",
    date: "2025-11-30",
    createdAt: "2025-11-30T16:00:00.000Z"
  },
  {
    id: "20004",
    userId: "12345",
    type: "spending",
    amount: 45.00,
    category: "Gas",
    description: "Fill up tank",
    date: "2025-11-29",
    createdAt: "2025-11-29T14:00:00.000Z"
  },
  {
    id: "20005",
    userId: "12345",
    type: "spending",
    amount: 25.00,
    category: "Dining out",
    description: "Lunch with friends",
    date: "2025-11-28",
    createdAt: "2025-11-28T13:00:00.000Z"
  },
  {
    id: "20006",
    userId: "12345",
    type: "spending",
    amount: 12.50,
    category: "Coffee & Snacks",
    description: "Morning coffee",
    date: "2025-11-27",
    createdAt: "2025-11-27T08:30:00.000Z"
  },
  {
    id: "20007",
    userId: "12345",
    type: "spending",
    amount: 150.00,
    category: "Textbooks",
    description: "Biology textbook",
    date: "2025-11-25",
    createdAt: "2025-11-25T15:00:00.000Z"
  },
  {
    id: "20008",
    userId: "12345",
    type: "spending",
    amount: 15.99,
    category: "Movies & Streaming",
    description: "Netflix subscription",
    date: "2025-11-22",
    createdAt: "2025-11-22T10:00:00.000Z"
  },
  {
    id: "20009",
    userId: "12345",
    type: "spending",
    amount: 35.00,
    category: "Healthcare",
    description: "Pharmacy - prescription",
    date: "2025-11-20",
    createdAt: "2025-11-20T14:00:00.000Z"
  },
  {
    id: "20010",
    userId: "12345",
    type: "spending",
    amount: 80.00,
    category: "Groceries",
    description: "Weekly shopping",
    date: "2025-11-18",
    createdAt: "2025-11-18T17:00:00.000Z"
  },
  {
    id: "20011",
    userId: "12345",
    type: "spending",
    amount: 40.00,
    category: "Transportation",
    description: "Uber rides",
    date: "2025-11-27",
    createdAt: "2025-11-27T21:00:00.000Z"
  },
  {
    id: "20012",
    userId: "12345",
    type: "spending",
    amount: 95.00,
    category: "Clothing",
    description: "Winter jacket",
    date: "2025-11-24",
    createdAt: "2025-11-24T14:30:00.000Z"
  },
  {
    id: "20013",
    userId: "12345",
    type: "spending",
    amount: 30.00,
    category: "Entertainment",
    description: "Movie tickets",
    date: "2025-11-23",
    createdAt: "2025-11-23T20:00:00.000Z"
  },
  {
    id: "20014",
    userId: "12345",
    type: "spending",
    amount: 55.00,
    category: "Dining out",
    description: "Dinner date",
    date: "2025-11-21",
    createdAt: "2025-11-21T19:30:00.000Z"
  },
  
  // Giving transactions
  {
    id: "30001",
    userId: "12345",
    type: "giving",
    amount: 200.00,
    category: "Church",
    description: "Sunday offering",
    date: "2025-12-01",
    createdAt: "2025-12-01T11:00:00.000Z"
  },
  {
    id: "30002",
    userId: "12345",
    type: "giving",
    amount: 50.00,
    category: "Charity",
    description: "Local food bank donation",
    date: "2025-11-26",
    createdAt: "2025-11-26T13:00:00.000Z"
  },
  {
    id: "30003",
    userId: "12345",
    type: "giving",
    amount: 25.00,
    category: "Community Outreach",
    description: "Homeless shelter support",
    date: "2025-11-22",
    createdAt: "2025-11-22T16:00:00.000Z"
  },
  {
    id: "30004",
    userId: "12345",
    type: "giving",
    amount: 100.00,
    category: "Ministry",
    description: "Youth ministry support",
    date: "2025-11-15",
    createdAt: "2025-11-15T12:00:00.000Z"
  },
  {
    id: "30005",
    userId: "12345",
    type: "giving",
    amount: 150.00,
    category: "Church",
    description: "Special missions offering",
    date: "2025-11-19",
    createdAt: "2025-11-19T11:30:00.000Z"
  }
];

// Helper object to calculate totals from mock transactions
const income = mockTransactions
  .filter(t => t.type === 'income')
  .reduce((sum, t) => sum + t.amount, 0);
const spending = mockTransactions
  .filter(t => t.type === 'spending')
  .reduce((sum, t) => sum + t.amount, 0);
const giving = mockTransactions
  .filter(t => t.type === 'giving')
  .reduce((sum, t) => sum + t.amount, 0);

export const mockTotals: {
  income: number;
  spending: number;
  giving: number;
  net: number;
} = {
  income,
  spending,
  giving,
  net: income - spending - giving // Calculate net (income - spending - giving)
};
