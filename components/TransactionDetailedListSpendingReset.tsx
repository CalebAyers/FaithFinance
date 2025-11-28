import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Return from "./Return";
import Vector13 from "../assets/Vector13.svg";
import Profile from "./Profile";
import Vector11 from "../assets/Vector11.svg";
import SmallAddTransaction from "./SmallAddTransaction";
import SmallEditButton from "./SmallEditButton";
import IconBible1 from "../assets/Icon-Bible1.svg";
import SortedBy from "./SortedBy";
import Home from "./Home";
import Vector from "../assets/Vector.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Dashboard from "./Dashboard";
import Vector8 from "../assets/Vector8.svg";
import Book from "./Book";
import Vector9 from "../assets/Vector9.svg";
import IPhoneBezel from "./IPhoneBezel";
import Money from "./Money";
import Transaction from "./Transaction";
import {
  Width,
  Height,
  Gap,
  Padding,
  Color,
  Border,
  LineHeight,
  FontSize,
  FontFamily,
  BoxShadow,
  MaxWidth,
} from "../GlobalStyles";

const TransactionDetailedListSpendingReset = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.transactionDetailedListspen}
      contentContainerStyle={styles.transactionDetailedListSpenContent}
    >
      <View style={styles.detailedList}>
        <View style={[styles.headerBarDefault, styles.headerBarDefaultFlexBox]}>
          <Return
            state="Active"
            returnIcon={<Vector13 width={75} height={55} />}
          />
          <View style={styles.iconProfile}>
            <Profile
              state="default"
              profilePosition="absolute"
              profileTop="0%"
              profileLeft="0%"
              profileHeight="100%"
              profileRight="0%"
              profileBottom="0%"
              profileColor="#c99700"
              vector={<Vector11 width={83} height={83} />}
            />
          </View>
        </View>
        <View style={[styles.detailedListInner, styles.detailedInnerFlexBox]}>
          <View style={styles.searchBarParent}>
            <TextInput
              style={[styles.searchBar, styles.searchBarLayout]}
              placeholder="Search..."
              multiline={false}
              placeholderTextColor="#000"
            />
            <View style={styles.transactionArea}>
              <View
                style={[
                  styles.transactionOptionsParent,
                  styles.headerBarDefaultFlexBox,
                ]}
              >
                <View style={styles.transactionOptions}>
                  <SmallAddTransaction
                    state="Active"
                    state1="Default"
                    addTransaction="Add Transaction"
                    addTransactionColor="#fff9e6"
                    addTransactionPosition="unset"
                    addTransactionHeight="40"
                    addTransactionTop="unset"
                    addTransactionRight="unset"
                    addTransactionBottom="unset"
                    addTransactionLeft="unset"
                    addTransactionBackgroundColor="#e1ad01"
                    addTransactionBorderStyle="solid"
                    addTransactionBorderColor="#fff9e6"
                    addTransactionBorderWidth={1}
                    addTransactionWidth="unset"
                    addTransactionFontSize={14}
                  />
                  <View style={styles.sortedByWrapper}>
                    <Text style={[styles.sortedBy, styles.sortedByLayout]}>
                      Sorted By
                    </Text>
                  </View>
                </View>
                <SmallEditButton
                  state="Active"
                  smallEditButtonWidth={170}
                  iconBible={
                    <IconBible1
                      width={Width.width_12_28}
                      height={Height.height_20_8}
                    />
                  }
                  bibleIconWidth={12}
                  state1="Default"
                  addTransaction="Edit"
                  addTransactionColor="#fff9e6"
                  addTransactionPosition="unset"
                  addTransactionHeight="40"
                  addTransactionTop="unset"
                  addTransactionRight="unset"
                  addTransactionBottom="unset"
                  addTransactionLeft="unset"
                  addTransactionBackgroundColor="#e1ad01"
                  addTransactionBorderStyle="solid"
                  addTransactionBorderColor="#fff9e6"
                  addTransactionBorderWidth={1}
                  addTransactionWidth="unset"
                  addTransactionFontSize={14}
                />
              </View>
              <SortedBy state="Category" />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.navigationBarDefault,
            styles.transactionIncomeSpaceBlock,
          ]}
        >
          <View style={styles.iconProfile}>
            <Home
              state="default"
              activePosition="absolute"
              activeHeight="100%"
              activeTop="0%"
              activeRight="0%"
              activeBottom="0%"
              activeLeft="0%"
              homeColor="#c99700"
              vector={<Vector width={67} height={73} />}
            />
          </View>
          <Pressable
            style={styles.iconMoney3}
            onPress={() => navigation.navigate("ContentArea")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/active1.png")}
            />
          </Pressable>
          <View style={styles.iconProfile}>
            <Dashboard
              state="default"
              dashboardHeight="100%"
              dashboardPosition="absolute"
              dashboardTop="0%"
              dashboardRight="0%"
              dashboardBottom="0%"
              dashboardLeft="0%"
              insightsColor="#c99700"
              vector={<Vector8 width={58} height={67} />}
            />
          </View>
          <View style={styles.iconProfile}>
            <Book
              state="default"
              bookHeight="100%"
              bookPosition="absolute"
              bookTop="0%"
              bookRight="0%"
              bookBottom="0%"
              bookLeft="0%"
              reflectionColor="#c99700"
              vector={<Vector9 width={67} height={73} />}
            />
          </View>
          <View style={styles.iconProfile}>
            <Profile
              state="default"
              profilePosition="absolute"
              profileTop="0%"
              profileLeft="0%"
              profileHeight="100%"
              profileRight="0%"
              profileBottom="0%"
              profileColor="#c99700"
              vector={<Vector11 width={83} height={83} />}
            />
          </View>
        </View>
        <IPhoneBezel
          type="iPhone 16"
          iPhoneBezelHeight={854}
          iPhone16={require("../assets/iPhone-16.png")}
        />
      </View>
      <View
        style={[
          styles.transactionDetailedListspenInner,
          styles.detailedInnerFlexBox,
        ]}
      >
        <ScrollView
          style={styles.transactionParent}
          contentContainerStyle={styles.frameContainer4Content}
        >
          <View style={styles.transaction}>
            <View
              style={[
                styles.transactionIncome,
                styles.transactionIncomeFlexBox,
              ]}
            >
              <View style={styles.transactionDetails}>
                <Money state="default" />
              </View>
              <View style={styles.otherDetails}>
                <View style={styles.detailsContainer}>
                  <Text style={[styles.transactionDetail, styles.valuesTypo]}>
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.detailInformation,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.oct172025Wrapper}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.valuesClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={[styles.values, styles.valuesClr]}>
                    +$100.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.transaction}>
            <View
              style={[
                styles.transactionIncome,
                styles.transactionIncomeFlexBox,
              ]}
            >
              <View style={styles.transactionDetails}>
                <Money state="default" />
              </View>
              <View style={styles.otherDetails}>
                <View style={styles.detailsContainer}>
                  <Text style={[styles.transactionDetail, styles.valuesTypo]}>
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.detailInformation,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.oct172025Wrapper}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.valuesClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={[styles.values, styles.valuesClr]}>
                    +$100.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.transaction3}>
            <View
              style={[
                styles.transactionIncome,
                styles.transactionIncomeFlexBox,
              ]}
            >
              <View style={styles.transactionDetails}>
                <Money state="default" />
              </View>
              <View style={styles.otherDetails}>
                <View style={styles.detailsContainer}>
                  <Text style={[styles.transactionDetail, styles.valuesTypo]}>
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.detailInformation,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.oct172025Wrapper}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.valuesClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={[styles.values, styles.valuesClr]}>
                    +$100.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.transaction3}>
            <View
              style={[
                styles.transactionIncome,
                styles.transactionIncomeFlexBox,
              ]}
            >
              <View style={styles.transactionDetails}>
                <Money state="default" />
              </View>
              <View style={styles.otherDetails}>
                <View style={styles.detailsContainer}>
                  <Text style={[styles.transactionDetail, styles.valuesTypo]}>
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.detailInformation,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.oct172025Wrapper}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.valuesClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={[styles.values, styles.valuesClr]}>
                    +$100.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.transaction3}>
            <View
              style={[
                styles.transactionIncome,
                styles.transactionIncomeFlexBox,
              ]}
            >
              <View style={styles.transactionDetails}>
                <Money state="default" />
              </View>
              <View style={styles.otherDetails}>
                <View style={styles.detailsContainer}>
                  <Text style={[styles.transactionDetail, styles.valuesTypo]}>
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.detailInformation,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.oct172025Wrapper}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.valuesClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={[styles.values, styles.valuesClr]}>
                    +$100.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.transaction3}>
            <View
              style={[
                styles.transactionIncome,
                styles.transactionIncomeFlexBox,
              ]}
            >
              <View style={styles.transactionDetails}>
                <Money state="default" />
              </View>
              <View style={styles.otherDetails}>
                <View style={styles.detailsContainer}>
                  <Text style={[styles.transactionDetail, styles.valuesTypo]}>
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.detailInformation,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.oct172025Wrapper}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.valuesClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={[styles.values, styles.valuesClr]}>
                    +$100.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.transaction3}>
            <Transaction
              state="Giving"
              transactionDetailColor="#000"
              transactionDetailTextAlign="left"
              transactionDetailDisplay="flex"
              transactionDetailAlignItems="center"
              secondTransactionDetailWidth={135}
              category="Income"
              categoryWidth={45}
              categoryColor="#27ae60"
              emptySpace="+$100.00"
              emptySpaceColor="#27ae60"
              state1="default"
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  frameContainer4Content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 33,
    height: 988,
  },
  transactionDetailedListSpenContent: {
    flexDirection: "column",
    paddingBottom: 209,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: 1503,
    flex: 1,
  },
  headerBarDefaultFlexBox: {
    gap: Gap.gap_20,
    flexDirection: "row",
  },
  detailedInnerFlexBox: {
    paddingRight: Padding.padding_16,
    width: Width.width_376,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  searchBarLayout: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: Border.br_12,
    width: Width.width_360,
  },
  sortedByLayout: {
    display: "flex",
    lineHeight: LineHeight.lh_38,
    alignItems: "center",
  },
  transactionIncomeSpaceBlock: {
    paddingBottom: Padding.padding_13,
    overflow: "hidden",
  },
  transactionIncomeFlexBox: {
    gap: Gap.gap_10,
    flexDirection: "row",
  },
  valuesTypo: {
    fontSize: FontSize.fs_16,
    height: Height.height_38,
  },
  categoryTypo: {
    fontSize: FontSize.fs_12,
    textAlign: "left",
  },
  valuesClr: {
    color: Color.successColor,
    display: "flex",
    lineHeight: LineHeight.lh_38,
    alignItems: "center",
  },
  transactionDetailedListspen: {
    backgroundColor: Color.backgroundColorLightMode,
    maxWidth: 393,
    flex: 1,
    width: Width.width_393,
  },
  detailedList: {
    height: Height.height_852,
    gap: 32,
    alignItems: "flex-end",
    zIndex: 1,
    width: Width.width_393,
  },
  headerBarDefault: {
    height: Height.height_90,
    justifyContent: "space-between",
    paddingLeft: Padding.padding_16,
    paddingRight: Padding.padding_24,
    paddingBottom: Padding.padding_18,
    zIndex: 3,
    paddingTop: Padding.padding_14,
    alignItems: "center",
    gap: Gap.gap_20,
    overflow: "hidden",
    backgroundColor: Color.mainRed,
    width: Width.width_394,
  },
  iconProfile: {
    height: Height.height_32,
    width: Width.width_32,
  },
  detailedListInner: {
    height: 598,
    paddingBottom: 429,
  },
  searchBarParent: {
    height: 169,
    gap: Gap.gap_28,
    width: Width.width_360,
  },
  searchBar: {
    height: Height.height_36,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    elevation: 20,
    paddingHorizontal: Padding.padding_10,
    paddingVertical: Padding.padding_4,
    fontStyle: "italic",
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    fontSize: FontSize.fs_14,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: Border.br_12,
  },
  transactionArea: {
    height: Height.height_105,
    width: Width.width_360,
    zIndex: 1,
  },
  transactionOptionsParent: {
    height: 83,
    width: Width.width_360,
  },
  transactionOptions: {
    width: Width.width_170,
    gap: Gap.gap_3,
    height: 83,
  },
  sortedByWrapper: {
    paddingLeft: Padding.padding_14,
    height: Height.height_40,
    width: Width.width_101,
    flexDirection: "row",
  },
  sortedBy: {
    width: Width.width_90,
    fontSize: FontSize.fs_18,
    textAlign: "left",
    color: Color.colorBlack,
    display: "flex",
    lineHeight: LineHeight.lh_38,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    height: Height.height_40,
  },
  navigationBarDefault: {
    marginRight: -1,
    height: Height.height_100,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
    paddingTop: Padding.padding_12,
    gap: Gap.gap_45,
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.mainRed,
    width: Width.width_394,
    paddingBottom: Padding.padding_13,
  },
  iconMoney3: {
    width: Width.width_32_23,
    height: Height.height_32_23,
  },
  icon: {
    height: "100%",
    width: "100%",
    nodeWidth: 32,
    nodeHeight: 32,
  },
  transactionDetailedListspenInner: {
    height: 988,
    marginTop: -546,
  },
  transactionParent: {
    maxWidth: MaxWidth.max_w_360,
    width: Width.width_360,
    flex: 1,
  },
  transaction: {
    alignSelf: "stretch",
    height: Height.height_80,
    flexDirection: "row",
  },
  transactionIncome: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    paddingLeft: Padding.padding_8,
    height: Height.height_80,
    paddingBottom: Padding.padding_13,
    overflow: "hidden",
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: Border.br_12,
    width: Width.width_360,
    paddingTop: Padding.padding_14,
  },
  transactionDetails: {
    width: Width.width_39,
    height: Height.height_46,
    paddingTop: Padding.padding_7,
    zIndex: 2,
  },
  otherDetails: {
    width: Width.width_303,
    height: Height.height_53,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  detailsContainer: {
    width: Width.width_218,
    height: Height.height_53,
    zIndex: 2,
  },
  transactionDetail: {
    width: Width.width_221,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    zIndex: 1,
    display: "flex",
    lineHeight: LineHeight.lh_38,
    alignItems: "center",
    textAlign: "left",
    color: Color.colorBlack,
  },
  detailInformation: {
    width: Width.width_135_1,
    marginTop: -2,
    height: Height.height_17,
    zIndex: 2,
    alignItems: "flex-end",
  },
  oct172025Wrapper: {
    width: Width.width_83,
    height: Height.height_15,
    paddingBottom: Padding.padding_1,
    justifyContent: "flex-end",
  },
  oct172025: {
    width: Width.width_86,
    height: Height.height_14,
    fontFamily: FontFamily.interRegular,
    color: Color.componentsNumbers,
    display: "flex",
    lineHeight: LineHeight.lh_38,
    alignItems: "center",
    fontSize: FontSize.fs_12,
  },
  category: {
    width: Width.width_45_1,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.fs_12,
    textAlign: "left",
    height: Height.height_17,
  },
  valueContainer: {
    width: Width.width_98,
    height: Height.height_42,
    paddingBottom: Padding.padding_4,
    marginLeft: -13,
    zIndex: 1,
    justifyContent: "flex-end",
  },
  values: {
    textAlign: "center",
    fontSize: FontSize.fs_16,
    height: Height.height_38,
    justifyContent: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: Width.width_101,
  },
  transaction3: {
    height: Height.height_80,
    width: Width.width_360,
    flexDirection: "row",
  },
});

export default TransactionDetailedListSpendingReset;
