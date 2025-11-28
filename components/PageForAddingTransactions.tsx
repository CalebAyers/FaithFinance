import * as React from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Close1 from "../assets/close.svg";
import AddTransaction from "./AddTransaction";
import {
  FontFamily,
  Color,
  FontSize,
  LineHeight,
  Height,
  Padding,
  Width,
  BoxShadow,
  Border,
  Gap,
} from "../GlobalStyles";

export type PageForAddingTransactionsType = {
  state?: string;
  addHeight?: string;
  addWidth?: string;
  addTop?: string;
  addBottom?: string;
  addLeft?: string;
  addMarginTop?: string;
  vectorIconWidth?: string;
  vectorIconRight?: string;
  vectorIconLeft?: string;
};

const PageForAddingTransactions = ({
  state,
  addHeight,
  addWidth,
  addTop,
  addBottom,
  addLeft,
  addMarginTop,
  vectorIconWidth,
  vectorIconRight,
  vectorIconLeft,
}: PageForAddingTransactionsType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.pageForAddingTransactions}>
      <KeyboardAvoidingView
        style={[styles.keyboardavoidingview, styles.iconLayout]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.view}>
          <View style={styles.frameParent}>
            <View style={styles.frameWrapper}>
              <View style={styles.closeParent}>
                <Pressable
                  style={styles.close}
                  onPress={() => navigation.navigate("HomePageReset")}
                >
                  <Close1
                    style={[styles.icon, styles.iconLayout]}
                    width={24}
                    height={24}
                  />
                </Pressable>
                <View style={styles.addTransactionWrapper}>
                  <Text style={styles.addTransaction}>Add Transaction</Text>
                </View>
              </View>
            </View>
            <Text style={styles.trackYourSpending}>
              Track your spending or income to maintain faithful stewardship.
            </Text>
          </View>
          <View style={styles.typeParent}>
            <View style={styles.typeLayout1}>
              <Text style={[styles.type2, styles.type2Typo]}>Type:</Text>
              <View style={styles.typeInputArea} />
              <TextInput
                style={[styles.inputCell, styles.inputCellFlexBox]}
                placeholder="Make this a dropdown menu "
                multiline={false}
                placeholderTextColor="#fff"
              />
            </View>
            <View style={[styles.amount, styles.typeLayout1]}>
              <Text style={[styles.type2, styles.type2Typo]}>Amount:</Text>
              <View style={[styles.typeInputArea2, styles.typeLayout]} />
              <TextInput
                style={[styles.inputCell, styles.inputCellFlexBox]}
                placeholder="0.00"
                multiline={false}
                placeholderTextColor="#fff"
              />
            </View>
            <View style={[styles.category, styles.typeLayout1]}>
              <Text style={[styles.type2, styles.type2Typo]}>Category:</Text>
              <View style={[styles.typeInputArea2, styles.typeLayout]} />
              <TextInput
                style={[styles.inputCell, styles.inputCellFlexBox]}
                placeholder="Make this a dropdown menu "
                multiline={false}
                placeholderTextColor="#fff"
              />
            </View>
            <View style={[styles.description, styles.typeLayout1]}>
              <Text style={[styles.description2, styles.type2Typo]}>
                Description:
              </Text>
              <View style={[styles.typeInputArea4, styles.typeLayout]} />
              <TextInput
                style={[styles.descriptionChild, styles.inputCellFlexBox]}
                placeholder="Enter description"
                multiline={false}
                placeholderTextColor="#fff"
              />
            </View>
          </View>
          <AddTransaction />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  type2Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.vikafjellColorsGeneralLabels,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    height: Height.height_38,
  },
  inputCellFlexBox: {
    width: 308,
    height: Height.height_32,
    paddingLeft: Padding.padding_4,
    flexDirection: "row",
  },
  typeLayout1: {
    paddingLeft: Padding.padding_12,
    height: 70,
    width: Width.width_323,
  },
  typeLayout: {
    boxShadow: BoxShadow.shadow_drop2,
    borderWidth: 1,
    borderColor: Color.mainRed,
    borderStyle: "solid",
    backgroundColor: Color.buttonUnpressed,
    elevation: 12,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    height: Height.height_32,
    width: Width.width_323,
    borderRadius: Border.br_12,
  },
  pageForAddingTransactions: {
    width: 380,
    height: 698,
    flex: 1,
  },
  keyboardavoidingview: {
    flex: 1,
  },
  view: {
    backgroundColor: Color.componentsBackgrounf,
    overflow: "hidden",
    paddingLeft: Padding.padding_29,
    paddingTop: 27,
    paddingRight: Padding.padding_16,
    paddingBottom: 68,
    gap: Gap.gap_45,
    borderRadius: Border.br_12,
    height: "100%",
    width: "100%",
  },
  frameParent: {
    height: 106,
    gap: Gap.gap_3,
    zIndex: 3,
    width: 335,
  },
  frameWrapper: {
    paddingLeft: Padding.padding_4,
    flexDirection: "row",
    height: Height.height_62,
    width: 335,
  },
  closeParent: {
    alignItems: "flex-end",
    width: 331,
    height: Height.height_62,
  },
  close: {
    width: Width.width_24,
    height: Height.height_24,
  },
  icon: {
    color: Color.colorGray,
    nodeWidth: 24,
    nodeHeight: 24,
  },
  addTransactionWrapper: {
    justifyContent: "flex-end",
    paddingRight: 140,
    height: Height.height_38,
    width: 331,
    flexDirection: "row",
  },
  addTransaction: {
    width: 194,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.mainRed,
    textAlign: "center",
    lineHeight: LineHeight.lh_38,
    height: Height.height_38,
  },
  trackYourSpending: {
    height: Height.height_41,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.vikafjellColorsGeneralLabels,
    fontSize: FontSize.fs_16,
    width: 335,
  },
  typeParent: {
    height: 357,
    paddingBottom: Padding.padding_14,
    gap: 21,
    width: Width.width_323,
  },
  type2: {
    width: 314,
    zIndex: 0,
  },
  typeInputArea: {
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.26)",
    zIndex: 1,
    borderWidth: 1,
    borderColor: Color.mainRed,
    borderStyle: "solid",
    backgroundColor: Color.buttonUnpressed,
    elevation: 12,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    height: Height.height_32,
    width: Width.width_323,
    borderRadius: Border.br_12,
  },
  inputCell: {
    zIndex: 2,
  },
  amount: {
    zIndex: 3,
  },
  typeInputArea2: {
    zIndex: 1,
  },
  category: {
    zIndex: 4,
  },
  description: {
    paddingRight: Padding.padding_3,
    paddingBottom: Padding.padding_1,
    zIndex: 2,
  },
  description2: {
    width: 93,
    zIndex: 1,
  },
  typeInputArea4: {
    zIndex: 2,
  },
  descriptionChild: {
    marginTop: -1,
    zIndex: 3,
  },
});

export default PageForAddingTransactions;
