import * as React from "react";
import { StyleSheet, View } from "react-native";
import Dashboard from "./Dashboard";
import Vector2 from "../assets/Vector2.svg";
import { Height, Width } from "../GlobalStyles";

export type Dashboard1Type = {
  state1?: string;
  activePosition1?: string;
  activeHeight1?: string;
  activeTop1?: string;
  activeRight1?: string;
  activeBottom1?: string;
  activeLeft1?: string;
  insightsColor?: string;

  /** Variant props */
  state?: string;
};

const Dashboard1 = ({
  state = "default",
  state1,
  activePosition1,
  activeHeight1,
  activeTop1,
  activeRight1,
  activeBottom1,
  activeLeft1,
  insightsColor,
}: Dashboard1Type) => {
  return (
    <View style={styles.iconDashboard}>
      <Dashboard
        state={state1}
        activePosition={activePosition1}
        activeHeight={activeHeight1}
        activeTop={activeTop1}
        activeRight={activeRight1}
        activeBottom={activeBottom1}
        activeLeft={activeLeft1}
        vector={<Vector2 width={58} height={67} />}
        insightsColor={insightsColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconDashboard: {
    height: Height.height_32,
    width: Width.width_32,
  },
});

export default Dashboard1;
