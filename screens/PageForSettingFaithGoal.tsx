import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import Close1 from "../assets/close.svg";
import AddTransaction from "../components/AddTransaction";
import {
  Color,
  Height,
  LineHeight,
  FontSize,
  Padding,
  Width,
  Border,
  Gap,
  FontFamily,
  BoxShadow,
} from "../GlobalStyles";

const PageForSettingFaithGoal = () => {
  const [frameDatePicker, setFrameDatePicker] = useState(undefined);

  return (
    <SafeAreaView style={styles.viewBg}>
      <KeyboardAvoidingView
        style={styles.keyboardavoidingview}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={[styles.view, styles.viewBg]}>
          <View style={[styles.frameParent, styles.parentLayout]}>
            <View style={[styles.closeParent, styles.parentLayout]}>
              <Pressable style={styles.close} onPress={() => {}}>
                <Close1 style={styles.icon} width={24} height={24} />
              </Pressable>
              <View
                style={[styles.faithGoalHeader, styles.amountWrapperFlexBox]}
              >
                <Text style={[styles.settingFaithGoal, styles.amountLayout]}>
                  Setting Faith Goal
                </Text>
              </View>
            </View>
            <View style={styles.settingYourFaithGoalToMaiWrapper}>
              <Text style={[styles.settingYourFaith, styles.amountTypo]}>
                Setting Your Faith Goal to maintain daily faithful stewardship.
              </Text>
            </View>
          </View>
          <View style={[styles.inner, styles.innerLayout]}>
            <View style={[styles.frameGroup, styles.frameGroupLayout]}>
              <View style={[styles.amountWrapper, styles.frameGroupLayout]}>
                <Text style={[styles.amount, styles.amountTypo]}>Amount:</Text>
              </View>
              <TextInput
                style={[styles.frameChild, styles.frameLayout]}
                placeholder="0.00"
                multiline={false}
                placeholderTextColor="#fff"
              />
            </View>
          </View>
          <View style={[styles.inner, styles.innerLayout]}>
            <View style={[styles.frameGroup, styles.frameGroupLayout]}>
              <View style={[styles.amountWrapper, styles.frameGroupLayout]}>
                <Text
                  style={[styles.amount, styles.amountTypo]}
                >{`Period: `}</Text>
              </View>
              <RNKDatepicker
                style={styles.frameItem}
                placeholder={() => (
                  <Text style={styles.frameDatePickerPlaceHolder}>Date? </Text>
                )}
                date={frameDatePicker}
                onSelect={setFrameDatePicker}
                controlStyle={styles.frameDatePickerValue}
              />
            </View>
          </View>
          <View style={[styles.frameView, styles.innerLayout]}>
            <View style={[styles.frameGroup, styles.frameGroupLayout]}>
              <View style={[styles.amountWrapper, styles.frameGroupLayout]}>
                <Text style={[styles.amount, styles.amountTypo]}>
                  Description:
                </Text>
              </View>
              <TextInput
                style={[styles.frameInner, styles.frameLayout]}
                placeholder="Make this a dropdown menu "
                multiline={false}
                placeholderTextColor="#fff"
              />
            </View>
          </View>
          <View
            style={[styles.buttonAddTransactionWrapper, styles.innerLayout]}
          >
            <AddTransaction
              state="Active"
              onAddTransactionPress={() => {}}
              addTransactionWidth={323}
              state1="Default"
              addTransaction="Add Faith Goal"
              addTransactionColor="#e1ad01"
              addTransactionPosition="absolute"
              addTransactionHeight="100%"
              addTransactionTop="0%"
              addTransactionRight="0%"
              addTransactionBottom="0%"
              addTransactionLeft="0%"
              addTransactionBackgroundColor="#fff9e6"
              addTransactionBorderStyle="solid"
              addTransactionBorderColor="#e1ad01"
              addTransactionBorderWidth={1}
              addTransactionFontSize={16}
              state2="default"
              addHeight="52%"
              addTop="24%"
              addBottom="24%"
              addMarginTop="unset"
              addWidth="7.21%"
              addLeft="23.07%"
              vectorIconWidth="58.37%"
              vectorIconRight="20.6%"
              vectorIconLeft="21.03%"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frameDatePickerPlaceHolder: {
    fontFamily: "Inter-Regular",
    color: "#fff",
    fontSize: 14,
  },
  frameDatePickerValue: {},
  pageForSettingFaithGoal: {
    flex: 1,
    backgroundColor: "#fff9e6",
  },
  viewBg: {
    backgroundColor: Color.componentsBackgrounf,
    flex: 1,
  },
  parentLayout: {
    zIndex: null,
    width: 339,
  },
  amountWrapperFlexBox: {
    flexDirection: "row",
    height: Height.height_38,
  },
  amountLayout: {
    lineHeight: LineHeight.lh_38,
    height: Height.height_38,
  },
  amountTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.fs_16,
  },
  innerLayout: {
    width: 327,
    paddingLeft: Padding.padding_4,
    flexDirection: "row",
    zIndex: null,
  },
  frameGroupLayout: {
    width: Width.width_323,
    zIndex: null,
  },
  frameLayout: {
    paddingLeft: Padding.padding_16,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_12,
    elevation: 12,
    height: Height.height_32,
    width: Width.width_323,
    flexDirection: "row",
    backgroundColor: Color.componentsBackgrounf,
  },
  keyboardavoidingview: {
    flex: 1,
  },
  view: {
    height: 585,
    overflow: "hidden",
    paddingLeft: 25,
    paddingTop: 27,
    paddingRight: Padding.padding_16,
    paddingBottom: 64,
    gap: 21,
    width: "100%",
  },
  frameParent: {
    height: 130,
    paddingBottom: 25,
    gap: Gap.gap_3,
  },
  closeParent: {
    height: Height.height_62,
    alignItems: "flex-end",
  },
  close: {
    width: 24,
    height: 24,
  },
  icon: {
    color: Color.colorGray,
    nodeWidth: 24,
    nodeHeight: 24,
  },
  faithGoalHeader: {
    justifyContent: "flex-end",
    paddingRight: 132,
    zIndex: null,
    width: 339,
  },
  settingFaithGoal: {
    width: 210,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
    textAlign: "center",
  },
  settingYourFaithGoalToMaiWrapper: {
    paddingLeft: Padding.padding_4,
    height: Height.height_40,
    flexDirection: "row",
    zIndex: null,
    width: 339,
  },
  settingYourFaith: {
    width: 335,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    alignItems: "center",
    height: Height.height_40,
    color: Color.colorBlack,
    fontSize: FontSize.fs_16,
  },
  inner: {
    height: Height.height_70,
  },
  frameGroup: {
    height: Height.height_70,
  },
  amountWrapper: {
    paddingLeft: Padding.padding_12,
    flexDirection: "row",
    height: Height.height_38,
  },
  amount: {
    width: 314,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    lineHeight: LineHeight.lh_38,
    height: Height.height_38,
  },
  frameChild: {
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.26)",
    borderColor: Color.gOLD3,
    paddingRight: 3,
  },
  frameItem: {
    width: "100%",
  },
  frameView: {
    height: Height.height_90,
    paddingBottom: Padding.padding_20,
  },
  frameInner: {
    boxShadow: BoxShadow.shadow_drop2,
    borderColor: Color.navBarDefault,
    paddingRight: Padding.padding_5,
  },
  buttonAddTransactionWrapper: {
    height: Height.height_50,
  },
});

export default PageForSettingFaithGoal;
