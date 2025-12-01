import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart as RNPieChart } from "react-native-chart-kit";
import { Color, FontFamily } from "../GlobalStyles";

interface PieChartProps {
  spentPercentage: number;
  givingPercentage: number;
  incomePercentage: number;
}

const PieChart = ({ spentPercentage, givingPercentage, incomePercentage }: PieChartProps) => {
  const data = [
    {
      name: "Spent",
      population: spentPercentage,
      color: Color.mainRed,
      legendFontColor: Color.mainRed,
      legendFontSize: 14,
    },
    {
      name: "Giving",
      population: givingPercentage,
      color: Color.gOLD3,
      legendFontColor: Color.gOLD3,
      legendFontSize: 14,
    },
    {
      name: "Remaining",
      population: incomePercentage,
      color: Color.successColor,
      legendFontColor: Color.successColor,
      legendFontSize: 14,
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <RNPieChart
        data={data}
        width={Dimensions.get("window").width - 60}
        height={240}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute={false}
        hasLegend={true}
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  chart: {
    marginLeft: -10,
  },
});

export default PieChart;
