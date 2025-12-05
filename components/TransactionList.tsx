import * as React from "react";
import { StyleSheet, View } from "react-native";
import Transaction from "./Transaction";
import { formatCurrency } from "../utils/transactionUtils";

// Reusable transaction list component - displays array of transactions
interface TransactionListProps {
  transactions: any[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <View style={styles.transactionsList}>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
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
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsList: {
    gap: 12,
    marginBottom: 20,
  },
});

export default TransactionList;
