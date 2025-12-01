import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart as RNLineChart } from "react-native-chart-kit";
import { Color } from "../GlobalStyles";

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [300, 450, 280, 520, 410, 380],
        color: (opacity = 1) => Color.mainRed,
        strokeWidth: 2,
      },
      {
        data: [200, 250, 180, 320, 290, 240],
        color: (opacity = 1) => Color.gOLD3,
        strokeWidth: 2,
      },
    ],
    legend: ["Spending", "Giving"],
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
    propsForDots: {
      r: "4",
      strokeWidth: "2",
    },
  };

  return (
    <View style={styles.container}>
      <RNLineChart
        data={data}
        width={Dimensions.get("window").width - 60}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        yAxisLabel="$"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingLeft: 0,
  },
  chart: {
    borderRadius: 16,
    marginLeft: -15,
  },
});

export default LineChart;
