declare module 'react-native-chart-kit' {
  import { ComponentType } from 'react';
  import { ViewStyle } from 'react-native';

  export interface ChartConfig {
    backgroundColor?: string;
    backgroundGradientFrom?: string;
    backgroundGradientTo?: string;
    decimalPlaces?: number;
    color?: (opacity: number) => string;
    labelColor?: (opacity: number) => string;
    style?: ViewStyle;
    propsForDots?: any;
    propsForBackgroundLines?: any;
    barPercentage?: number;
  }

  export interface PieChartData {
    name: string;
    population: number;
    color: string;
    legendFontColor: string;
    legendFontSize: number;
  }

  export interface LineChartData {
    labels: string[];
    datasets: Array<{
      data: number[];
      color?: (opacity: number) => string;
      strokeWidth?: number;
    }>;
    legend?: string[];
  }

  export interface BarChartData {
    labels: string[];
    datasets: Array<{
      data: number[];
      colors?: Array<(opacity: number) => string>;
    }>;
  }

  export interface PieChartProps {
    data: PieChartData[];
    width: number;
    height: number;
    chartConfig: ChartConfig;
    accessor: string;
    backgroundColor: string;
    paddingLeft: string;
    absolute?: boolean;
    hasLegend?: boolean;
    style?: ViewStyle;
  }

  export interface LineChartProps {
    data: LineChartData;
    width: number;
    height: number;
    chartConfig: ChartConfig;
    bezier?: boolean;
    style?: ViewStyle;
    yAxisLabel?: string;
    yAxisSuffix?: string;
    withInnerLines?: boolean;
    withOuterLines?: boolean;
    withVerticalLabels?: boolean;
    withHorizontalLabels?: boolean;
  }

  export interface BarChartProps {
    data: BarChartData;
    width: number;
    height: number;
    chartConfig: ChartConfig;
    style?: ViewStyle;
    yAxisLabel?: string;
    yAxisSuffix?: string;
    fromZero?: boolean;
    withCustomBarColorFromData?: boolean;
    flatColor?: boolean;
    showValuesOnTopOfBars?: boolean;
    withInnerLines?: boolean;
  }

  export const PieChart: ComponentType<PieChartProps>;
  export const LineChart: ComponentType<LineChartProps>;
  export const BarChart: ComponentType<BarChartProps>;
}
