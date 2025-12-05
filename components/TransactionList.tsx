import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Transaction from "./Transaction";
import { formatCurrency } from "../utils/transactionUtils";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../GlobalStyles";

// Reusable transaction list component - displays array of transactions
interface TransactionListProps {
  transactions: any[];
  editMode?: boolean;
  onDelete?: (transaction: any) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, editMode = false, onDelete }) => {
  return (
    <View style={styles.transactionsList}>
      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionWrapper}>
          <Transaction
            state={
              transaction.type === 'income' ? 'Income' : 
              transaction.type === 'spending' ? 'Spending' : 
              'Giving'
            }
            category={transaction.category}
            prop={`${transaction.type === 'income' ? '+' : '-'}${formatCurrency(transaction.amount)}`}
            date={new Date(transaction.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          />
          {editMode && onDelete && (
            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => onDelete(transaction)}
              activeOpacity={0.7}
            >
              <Ionicons name="close" size={20} color={Color.mainRed} />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsList: {
    gap: 12,
    marginBottom: 20,
  },
  transactionWrapper: {
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Color.mainRed,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
});

export default TransactionList;
