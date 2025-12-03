import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import StorageService, { Transaction, UserProfile } from '../services/StorageService';
import { createTransaction, generateId } from '../utils/transactionUtils';

interface DataContextType {
  currentUser: UserProfile | null;
  transactions: Transaction[];
  isLoading: boolean;
  
  // User actions
  setCurrentUser: (user: UserProfile) => Promise<void>;
  createUser: (name: string, email: string) => Promise<UserProfile>;
  
  // Transaction actions
  addTransaction: (
    type: 'income' | 'spending' | 'giving',
    amount: number,
    category: string,
    description: string,
    date: string
  ) => Promise<void>;
  updateTransaction: (transaction: Transaction) => Promise<void>;
  deleteTransaction: (transactionId: string) => Promise<void>;
  refreshTransactions: () => Promise<void>;
  
  // Query helpers
  getTransactionsByType: (type: 'income' | 'spending' | 'giving') => Transaction[];
  getTransactionsByCategory: (category: string) => Transaction[];
  getTotalByType: (type: 'income' | 'spending' | 'giving') => number;
  
  // Data management
  clearAllData: () => Promise<void>;
  loadMockData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [currentUser, setCurrentUserState] = useState<UserProfile | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    loadInitialData();
  }, []);

  // Reload transactions when user changes
  useEffect(() => {
    if (currentUser) {
      refreshTransactions();
    }
  }, [currentUser?.id]);

  // Load initial data on app startup
  const loadInitialData = async () => {
    setIsLoading(true);
    try {
      let user = await StorageService.getCurrentUser();
      
      // Create default user if none exists
      if (!user) {
        user = {
          id: generateId(),
          name: 'Default User',
          email: 'user@faithfinance.com',
          createdAt: new Date().toISOString(),
        };
        await StorageService.saveUser(user);
        await StorageService.setCurrentUser(user);
      }
      
      setCurrentUserState(user);
      
      // Load user's transactions
      if (user) {
        const userTransactions = await StorageService.getUserTransactions(user.id);
        
        // If no transactions exist, load mock data
        if (userTransactions.length === 0) {
          const { mockTransactions } = await import('../mockData');
          const userMockTransactions = mockTransactions.map(t => ({
            ...t,
            userId: user.id,
          }));
          
          // Save mock transactions to storage
          for (const transaction of userMockTransactions) {
            await StorageService.addTransaction(transaction);
          }
          
          setTransactions(userMockTransactions);
        } else {
          setTransactions(userTransactions);
        }
      }
    } catch (error) {
      console.error('Error loading initial data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Switch to different user profile
  const setCurrentUser = async (user: UserProfile) => {
    try {
      await StorageService.setCurrentUser(user);
      setCurrentUserState(user);
    } catch (error) {
      console.error('Error setting current user:', error);
    }
  };

  // Create new user profile
  const createUser = async (name: string, email: string): Promise<UserProfile> => {
    const user: UserProfile = {
      id: generateId(),
      name,
      email,
      createdAt: new Date().toISOString(),
    };
    
    await StorageService.saveUser(user);
    await setCurrentUser(user);
    
    return user;
  };

  // Add new transaction for current user
  const addTransaction = async (
    type: 'income' | 'spending' | 'giving',
    amount: number,
    category: string,
    description: string,
    date: string
  ) => {
    if (!currentUser) {
      console.error('No current user');
      return;
    }

    try {
      const transaction = createTransaction(
        currentUser.id,
        type,
        amount,
        category,
        description,
        date
      );
      
      await StorageService.addTransaction(transaction);
      setTransactions(prev => [...prev, transaction]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  // Update existing transaction
  const updateTransaction = async (transaction: Transaction) => {
    try {
      await StorageService.updateTransaction(transaction);
      setTransactions(prev => 
        prev.map(t => t.id === transaction.id ? transaction : t)
      );
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };

  // Delete transaction by ID
  const deleteTransaction = async (transactionId: string) => {
    if (!currentUser) return;

    try {
      await StorageService.deleteTransaction(currentUser.id, transactionId);
      setTransactions(prev => prev.filter(t => t.id !== transactionId));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  // Reload transactions from storage
  const refreshTransactions = async () => {
    if (!currentUser) return;

    try {
      const userTransactions = await StorageService.getUserTransactions(currentUser.id);
      setTransactions(userTransactions);
    } catch (error) {
      console.error('Error refreshing transactions:', error);
    }
  };

  // Filter transactions by type (income/spending/giving)
  const getTransactionsByType = (type: 'income' | 'spending' | 'giving'): Transaction[] => {
    return transactions.filter(t => t.type === type);
  };

  // Filter transactions by category
  const getTransactionsByCategory = (category: string): Transaction[] => {
    return transactions.filter(t => t.category === category);
  };

  // Calculate total amount for a transaction type
  const getTotalByType = (type: 'income' | 'spending' | 'giving'): number => {
    return transactions
      .filter(t => t.type === type)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  // Clear all transactions for current user
  const clearAllData = async () => {
    if (!currentUser) return;

    try {
      await StorageService.clearUserData(currentUser.id);
      setTransactions([]);
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  };

  // Load mock data for current user (resets transactions to sample data)
  const loadMockData = async () => {
    if (!currentUser) {
      console.error('No current user found');
      return;
    }

    try {
      console.log('Starting mock data load for user:', currentUser.id);
      
      // Import mock transactions
      const { mockTransactions } = await import('../mockData');
      console.log('Mock transactions imported:', mockTransactions.length);
      
      // Clear existing transactions first
      await StorageService.clearUserData(currentUser.id);
      console.log('Existing transactions cleared');
      
      // Update mock transactions to use current user's ID
      const userMockTransactions = mockTransactions.map(t => ({
        ...t,
        userId: currentUser.id,
      }));
      
      // Add all mock transactions to storage
      for (const transaction of userMockTransactions) {
        await StorageService.addTransaction(transaction);
      }
      console.log('Mock transactions added to storage');
      
      // Force refresh from storage to ensure state is updated
      await refreshTransactions();
      console.log('Transactions refreshed from storage');
    } catch (error) {
      console.error('Error loading mock data:', error);
      throw error;
    }
  };

  const value: DataContextType = {
    currentUser,
    transactions,
    isLoading,
    setCurrentUser,
    createUser,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    refreshTransactions,
    getTransactionsByType,
    getTransactionsByCategory,
    getTotalByType,
    clearAllData,
    loadMockData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Hook to access data context in components
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
