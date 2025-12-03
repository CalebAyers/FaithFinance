import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys
const STORAGE_KEYS = {
    CURRENT_USER: '@faithfinance_current_user',
    USERS: '@faithfinance_users',
    TRANSACTIONS: '@faithfinance_transactions',
};

// User profile type
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

// Transaction type
export interface Transaction {
    id: string;
    userId: string;
    type: 'income' | 'spending' | 'giving';
    amount: number;
    category: string;
    description: string;
    date: string;
    createdAt: string;
}

// Transaction storage structure: { userId: Transaction[] }
export interface TransactionData {
    [userId: string]: Transaction[];
}

// StorageService - wrapper for AsyncStorage with CRUD operations
class StorageService {
  // ===== USER MANAGEMENT =====
  
  // Get currently active user
  async getCurrentUser(): Promise<UserProfile | null> {
    try {
        const userJson = await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
        console.error('Error getting current user:', error);
        return null;
    }
}

// Set active user
async setCurrentUser(user: UserProfile): Promise<void> {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    } catch (error) {
        console.error('Error setting current user:', error);
    }
}

// Get all registered users
async getAllUsers(): Promise<UserProfile[]> {
    try {
        const usersJson = await AsyncStorage.getItem(STORAGE_KEYS.USERS);
        return usersJson ? JSON.parse(usersJson) : [];
    } catch (error) {
        console.error('Error getting all users:', error);
        return [];
    }
}

// Save or update user profile
async saveUser(user: UserProfile): Promise<void> {
    try {
        const users = await this.getAllUsers();
        const existingIndex = users.findIndex(u => u.id === user.id);

        if (existingIndex >= 0) {
            users[existingIndex] = user;
        } else {
            users.push(user);
        }
        await AsyncStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    } catch (error) {
        console.error('Error saving user:', error);
    }
  }

  // ===== TRANSACTION MANAGEMENT =====

  // Get all transactions for all users
  async getAllTransactions(): Promise<TransactionData> {
    try {
      const transactionsJson = await AsyncStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
      return transactionsJson ? JSON.parse(transactionsJson) : {};
    } catch (error) {
      console.error('Error getting all transactions:', error);
      return {};
    }
  }

  // Get transactions for specific user
  async getUserTransactions(userId: string): Promise<Transaction[]> {
    try {
      const allTransactions = await this.getAllTransactions();
      return allTransactions[userId] || [];
    } catch (error) {
      console.error('Error getting user transactions:', error);
      return [];
    }
  }

  // Add new transaction
  async addTransaction(transaction: Transaction): Promise<void> {
    try {
      const allTransactions = await this.getAllTransactions();
      
      if (!allTransactions[transaction.userId]) {
        allTransactions[transaction.userId] = [];
      }
      
      allTransactions[transaction.userId].push(transaction);
      
      await AsyncStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(allTransactions));
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  }

  // Update existing transaction
  async updateTransaction(transaction: Transaction): Promise<void> {
    try {
      const allTransactions = await this.getAllTransactions();
      const userTransactions = allTransactions[transaction.userId] || [];
      
      const index = userTransactions.findIndex(t => t.id === transaction.id);
      if (index >= 0) {
        userTransactions[index] = transaction;
        allTransactions[transaction.userId] = userTransactions;
        await AsyncStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(allTransactions));
      }
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  }

  // Delete transaction by ID
  async deleteTransaction(userId: string, transactionId: string): Promise<void> {
    try {
      const allTransactions = await this.getAllTransactions();
      const userTransactions = allTransactions[userId] || [];
      
      allTransactions[userId] = userTransactions.filter(t => t.id !== transactionId);
      
      await AsyncStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(allTransactions));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  }

  // ===== QUERY HELPERS =====

  // Get transactions filtered by type
  async getTransactionsByType(userId: string, type: 'income' | 'spending' | 'giving'): Promise<Transaction[]> {
    try {
      const transactions = await this.getUserTransactions(userId);
      return transactions.filter(t => t.type === type);
    } catch (error) {
      console.error('Error getting transactions by type:', error);
      return [];
    }
  }

  // Get transactions filtered by category
  async getTransactionsByCategory(userId: string, category: string): Promise<Transaction[]> {
    try {
      const transactions = await this.getUserTransactions(userId);
      return transactions.filter(t => t.category === category);
    } catch (error) {
      console.error('Error getting transactions by category:', error);
      return [];
    }
  }

  // Get transactions within date range
  async getTransactionsByDateRange(userId: string, startDate: string, endDate: string): Promise<Transaction[]> {
    try {
      const transactions = await this.getUserTransactions(userId);
      return transactions.filter(t => t.date >= startDate && t.date <= endDate);
    } catch (error) {
      console.error('Error getting transactions by date range:', error);
      return [];
    }
  }

  // ===== ANALYTICS =====

  // Calculate total for transaction type
  async getTotalByType(userId: string, type: 'income' | 'spending' | 'giving'): Promise<number> {
    try {
      const transactions = await this.getTransactionsByType(userId, type);
      return transactions.reduce((sum, t) => sum + t.amount, 0);
    } catch (error) {
      console.error('Error getting total by type:', error);
      return 0;
    }
  }

  // Calculate totals grouped by category
  async getCategoryTotals(userId: string): Promise<{ [category: string]: number }> {
    try {
      const transactions = await this.getUserTransactions(userId);
      const totals: { [category: string]: number } = {};
      
      transactions.forEach(t => {
        if (!totals[t.category]) {
          totals[t.category] = 0;
        }
        totals[t.category] += t.amount;
      });
      
      return totals;
    } catch (error) {
      console.error('Error getting category totals:', error);
      return {};
    }
  }

  // ===== DATA MANAGEMENT =====

  // Clear all app data
  async clearAllData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.CURRENT_USER,
        STORAGE_KEYS.USERS,
        STORAGE_KEYS.TRANSACTIONS,
      ]);
    } catch (error) {
      console.error('Error clearing all data:', error);
    }
  }

  // Clear transactions for specific user
  async clearUserData(userId: string): Promise<void> {
    try {
      const allTransactions = await this.getAllTransactions();
      delete allTransactions[userId];
      await AsyncStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(allTransactions));
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  }
}

export default new StorageService();
