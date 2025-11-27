import * as React from "react";
import { useState } from "react";
import { Text, TextStyle, LayoutChangeEvent, StyleProp } from "react-native";

type UnorderedListProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  bulletChar?: string;
};

const UnorderedList = ({
  children,
  style,
  bulletChar = "•",
}: UnorderedListProps) => {
  const [bulletWidth, setBulletWidth] = useState(0);

  const handleBulletLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    if (width !== bulletWidth) {
      setBulletWidth(width);
    }
  };

  const items = Array.isArray(children) ? children : [children];

  return (
    <Text style={[{ display: "flex", flexDirection: "column" }, style]}>
      {items.map((child, index) => {
        const childProps = child.props;
        return (
          <Text
            key={index}
            style={{
              ...childProps.style,
            }}
          >
            <Text style={{ position: "relative" }}>
              {"\u200A"}
              <Text
                onLayout={handleBulletLayout}
                style={{ position: "absolute", left: -bulletWidth, bottom: 0 }}
              >
                {bulletChar}{" "}
              </Text>
            </Text>

            {childProps.children}
            {index < items.length - 1 && "\n"}
          </Text>
        );
      })}
    </Text>
  );
};
export default UnorderedList;
