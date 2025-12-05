import { Transaction, UserProfile } from '../services/StorageService';

// Generate 5-digit unique ID for transactions/users
export const generateId = (): string => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

// Format date to YYYY-MM-DD string
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Format number as currency ($X,XXX.XX)
export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

// Build new Transaction object
export const createTransaction = (
  userId: string,
  type: 'income' | 'spending' | 'giving',
  amount: number,
  category: string,
  description: string,
  date: string
): Transaction => {
  return {
    id: generateId(),
    userId,
    type,
    amount,
    category,
    description,
    date,
    createdAt: new Date().toISOString(),
  };
};

// Build new UserProfile object
export const createUserProfile = (
  name: string,
  email: string
): UserProfile => {
  return {
    id: generateId(),
    name,
    email,
    createdAt: new Date().toISOString(),
  };
};

// Transaction categories organized by type
export const TRANSACTION_CATEGORIES = {
  spending: [
    'Dining out',
    'Groceries',
    'Coffee & Snacks',
    'Transportation',
    'Gas',
    'Parking',
    'Housing',
    'Rent',
    'Utilities',
    'Internet',
    'Textbooks',
    'School Supplies',
    'Tuition',
    'Health & Wellness',
    'Gym Membership',
    'Healthcare',
    'Pharmacy',
    'Entertainment',
    'Movies & Streaming',
    'Concerts & Events',
    'Hobbies',
    'Shopping',
    'Clothing',
    'Electronics',
    'Personal Care',
    'Other',
  ],
  giving: [
    'Church',
    'Ministry',
    'Charity',
    'Community Outreach',
    'Other',
  ],
  income: [
    'Salary',
    'Part-time Job',
    'Freelance',
    'Gift',
    'Other',
  ],
};

// Sort transactions newest to oldest by date
export const sortTransactionsByDate = (transactions: Transaction[]): Transaction[] => {
  return [...transactions].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

// Group transactions by category
export const groupTransactionsByCategory = (transactions: Transaction[]): { [category: string]: Transaction[] } => {
  const grouped: { [category: string]: Transaction[] } = {};
  
  transactions.forEach(transaction => {
    if (!grouped[transaction.category]) {
      grouped[transaction.category] = [];
    }
    grouped[transaction.category].push(transaction);
  });
  
  return grouped;
};

// Group transactions by type (income/spending/giving)
export const groupTransactionsByType = (transactions: Transaction[]): {
  income: Transaction[];
  spending: Transaction[];
  giving: Transaction[];
} => {
  return {
    income: transactions.filter(t => t.type === 'income'),
    spending: transactions.filter(t => t.type === 'spending'),
    giving: transactions.filter(t => t.type === 'giving'),
  };
};

// Calculate totals for each type and net
export const calculateTotals = (transactions: Transaction[]): {
  income: number;
  spending: number;
  giving: number;
  net: number;
} => {
  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const spending = transactions.filter(t => t.type === 'spending').reduce((sum, t) => sum + t.amount, 0);
  const giving = transactions.filter(t => t.type === 'giving').reduce((sum, t) => sum + t.amount, 0);
  
  return {
    income,
    spending,
    giving,
    net: income - spending - giving,
  };
};

// Filter transactions for time period
export const getTransactionsForPeriod = (
  transactions: Transaction[],
  period: 'daily' | 'weekly' | 'monthly' | 'yearly'
): Transaction[] => {
  const now = new Date();
  const startDate = new Date();
  
  switch (period) {
    case 'daily':
      startDate.setHours(0, 0, 0, 0);
      break;
    case 'weekly':
      startDate.setDate(now.getDate() - 7);
      break;
    case 'monthly':
      startDate.setMonth(now.getMonth() - 1);
      break;
    case 'yearly':
      startDate.setFullYear(now.getFullYear() - 1);
      break;
  }
  
  return transactions.filter(t => new Date(t.date) >= startDate);
};
