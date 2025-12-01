import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BarChart as RNBarChart } from "react-native-chart-kit";
import { Color } from "../GlobalStyles";

interface BarChartProps {
  incomeValue: number;
  spendsValue: number;
  givingValue: number;
}

const BarChart = ({ incomeValue, spendsValue, givingValue }: BarChartProps) => {
  const data = {
    labels: ["Income", "Spending", "Giving"],
    datasets: [
      {
        data: [incomeValue, spendsValue, givingValue],
        colors: [
          (opacity = 1) => Color.successColor,
          (opacity = 1) => Color.mainRed,
          (opacity = 1) => Color.gOLD3,
        ],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: Color.componentsBackgrounf,
    backgroundGradientFrom: Color.componentsBackgrounf,
    backgroundGradientTo: Color.componentsBackgrounf,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
      stroke: "#e0e0e0",
    },
    barPercentage: 1.5,
  };

  return (
    <View style={styles.container}>
      <RNBarChart
        data={data}
        width={Dimensions.get("window").width - 60}
        height={250}
        chartConfig={chartConfig}
        fromZero
        withCustomBarColorFromData
        flatColor
        showValuesOnTopOfBars
        withInnerLines={false}
        yAxisLabel="$"
        yAxisSuffix=""
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  chart: {
    borderRadius: 16,
  },
});

export default BarChart;
