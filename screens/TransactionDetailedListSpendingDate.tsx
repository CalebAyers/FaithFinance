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
import Default2 from "../components/Default2";
import SmallAddTransaction from "../components/SmallAddTransaction";
import SmallEditButton from "../components/SmallEditButton";
import IconBible1 from "../assets/Icon-Bible1.svg";
import SortedBy from "../components/SortedBy";
import Home from "../components/Home";
import Vector12 from "../assets/Vector12.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Dashboard from "../components/Dashboard";
import Vector4 from "../assets/Vector4.svg";
import Book from "../components/Book";
import Vector2 from "../assets/Vector2.svg";
import Profile from "../components/Profile";
import Vector7 from "../assets/Vector7.svg";
import IPhoneBezel from "../components/IPhoneBezel";
import Money from "../components/Money";
import Transaction from "../components/Transaction";
import {
  Width,
  Height,
  Padding,
  LineHeight,
  Gap,
  FontSize,
  Color,
  FontFamily,
  BoxShadow,
  Border,
  MaxWidth,
} from "../GlobalStyles";

const TransactionDetailedListSpendingDate = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.transactionDetailedListspen}
      contentContainerStyle={styles.transactionDetailedListSpenContent}
    >
      <View style={styles.transactionList}>
        <View style={[styles.header, styles.headerLayout]}>
          <Default2
            state="Default"
            state1="default"
            profilePosition="relative"
            profileTop="unset"
            profileLeft="unset"
            profileHeight="32"
            profileRight="unset"
            profileBottom="unset"
            profileColor="#e5e5e5"
          />
        </View>
        <TextInput
          style={[styles.searchBarContainer, styles.containerFlexBox]}
          placeholder="Search..."
          multiline={false}
          placeholderTextColor="#000"
        />
        <View style={[styles.controls, styles.containerFlexBox]}>
          <View style={styles.actions}>
            <View style={styles.transactionControls}>
              <SmallAddTransaction
                state="Default"
                state1="Default"
                addTransaction="Add Transaction"
                addTransactionColor="#e1ad01"
                addTransactionPosition="unset"
                addTransactionHeight="40"
                addTransactionTop="unset"
                addTransactionRight="unset"
                addTransactionBottom="unset"
                addTransactionLeft="unset"
                addTransactionBackgroundColor="#fff9e6"
                addTransactionBorderStyle="solid"
                addTransactionBorderColor="#e1ad01"
                addTransactionBorderWidth={1}
                addTransactionWidth="unset"
                addTransactionFontSize={14}
              />
              <SmallEditButton
                state="Default"
                iconBible={
                  <IconBible1
                    width={Width.width_12_28}
                    height={Height.height_20_8}
                  />
                }
                state1="Default"
                addTransaction="Edit"
                addTransactionColor="#e1ad01"
                addTransactionPosition="unset"
                addTransactionHeight="40"
                addTransactionTop="unset"
                addTransactionRight="unset"
                addTransactionBottom="unset"
                addTransactionLeft="unset"
                addTransactionBackgroundColor="#fff9e6"
                addTransactionBorderStyle="solid"
                addTransactionBorderColor="#e1ad01"
                addTransactionBorderWidth={1}
                addTransactionWidth="unset"
                addTransactionFontSize={14}
              />
            </View>
            <View style={styles.sortControls}>
              <View style={styles.sortHeader}>
                <Text style={[styles.sortedBy, styles.sortedByFlexBox]}>
                  Sorted By
                </Text>
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
          <Home
            state="default"
            activePosition="relative"
            activeHeight={32}
            activeTop="unset"
            activeRight="unset"
            activeBottom="unset"
            activeLeft="unset"
            homeColor="#e5e5e5"
            vector={<Vector12 width={67} height={73} />}
          />
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
          <Dashboard
            state="default"
            dashboardHeight={32}
            dashboardPosition="relative"
            dashboardTop="unset"
            dashboardRight="unset"
            dashboardBottom="unset"
            dashboardLeft="unset"
            insightsColor="#e5e5e5"
            vector={<Vector4 width={58} height={67} />}
          />
          <Book
            state="default"
            bookHeight={32}
            bookPosition="relative"
            bookTop="unset"
            bookRight="unset"
            bookBottom="unset"
            bookLeft="unset"
            reflectionColor="#e5e5e5"
            vector={<Vector2 width={67} height={73} />}
          />
          <Profile
            state="default"
            profilePosition="relative"
            profileTop="unset"
            profileLeft="unset"
            profileHeight={32}
            profileRight="unset"
            profileBottom="unset"
            profileColor="#e5e5e5"
            vector={<Vector7 width={83} height={83} />}
          />
        </View>
        <IPhoneBezel
          type="iPhone 16"
          iPhoneBezelHeight={854}
          iPhone16={require("../assets/iPhone-16.png")}
        />
      </View>
      <View style={[styles.transactionContainer, styles.containerFlexBox]}>
        <ScrollView
          style={styles.transactionItems}
          contentContainerStyle={styles.transactionItemsContainerContent}
        >
          <View style={styles.transaction}>
            <View
              style={[
                styles.transactionIncome,
                styles.transactionIncomeFlexBox,
              ]}
            >
              <View style={styles.iconMoney2Wrapper}>
                <Money state="default" />
              </View>
              <View style={styles.itemDetailsParent}>
                <View style={styles.itemDetails}>
                  <Text
                    style={[styles.transactionDetail, styles.emptyDividersTypo]}
                  >
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.dateCategoryDetailsParent,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.dateCategoryDetails}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.categoryClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.emptyItems}>
                  <Text style={[styles.emptyDividers, styles.categoryClr]}>
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
              <View style={styles.iconMoney2Wrapper}>
                <Money state="default" />
              </View>
              <View style={styles.itemDetailsParent}>
                <View style={styles.itemDetails}>
                  <Text
                    style={[styles.transactionDetail, styles.emptyDividersTypo]}
                  >
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.dateCategoryDetailsParent,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.dateCategoryDetails}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.categoryClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.emptyItems}>
                  <Text style={[styles.emptyDividers, styles.categoryClr]}>
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
              <View style={styles.iconMoney2Wrapper}>
                <Money state="default" />
              </View>
              <View style={styles.itemDetailsParent}>
                <View style={styles.itemDetails}>
                  <Text
                    style={[styles.transactionDetail, styles.emptyDividersTypo]}
                  >
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.dateCategoryDetailsParent,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.dateCategoryDetails}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.categoryClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.emptyItems}>
                  <Text style={[styles.emptyDividers, styles.categoryClr]}>
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
              <View style={styles.iconMoney2Wrapper}>
                <Money state="default" />
              </View>
              <View style={styles.itemDetailsParent}>
                <View style={styles.itemDetails}>
                  <Text
                    style={[styles.transactionDetail, styles.emptyDividersTypo]}
                  >
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.dateCategoryDetailsParent,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.dateCategoryDetails}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.categoryClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.emptyItems}>
                  <Text style={[styles.emptyDividers, styles.categoryClr]}>
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
              <View style={styles.iconMoney2Wrapper}>
                <Money state="default" />
              </View>
              <View style={styles.itemDetailsParent}>
                <View style={styles.itemDetails}>
                  <Text
                    style={[styles.transactionDetail, styles.emptyDividersTypo]}
                  >
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.dateCategoryDetailsParent,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.dateCategoryDetails}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.categoryClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.emptyItems}>
                  <Text style={[styles.emptyDividers, styles.categoryClr]}>
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
              <View style={styles.iconMoney2Wrapper}>
                <Money state="default" />
              </View>
              <View style={styles.itemDetailsParent}>
                <View style={styles.itemDetails}>
                  <Text
                    style={[styles.transactionDetail, styles.emptyDividersTypo]}
                  >
                    Transaction Detail
                  </Text>
                  <View
                    style={[
                      styles.dateCategoryDetailsParent,
                      styles.transactionIncomeFlexBox,
                    ]}
                  >
                    <View style={styles.dateCategoryDetails}>
                      <Text style={[styles.oct172025, styles.categoryTypo]}>
                        Oct 17, 2025
                      </Text>
                    </View>
                    <Text style={[styles.category, styles.categoryClr]}>
                      Income
                    </Text>
                  </View>
                </View>
                <View style={styles.emptyItems}>
                  <Text style={[styles.emptyDividers, styles.categoryClr]}>
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
  transactionItemsContainerContent: {
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
  headerLayout: {
    width: Width.width_394,
    flexDirection: "row",
  },
  containerFlexBox: {
    paddingRight: Padding.padding_16,
    width: Width.width_376,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  sortedByFlexBox: {
    alignItems: "center",
    display: "flex",
    lineHeight: LineHeight.lh_38,
  },
  transactionIncomeSpaceBlock: {
    paddingBottom: Padding.padding_13,
    overflow: "hidden",
  },
  transactionIncomeFlexBox: {
    gap: Gap.gap_10,
    flexDirection: "row",
  },
  emptyDividersTypo: {
    fontSize: FontSize.fs_16,
    height: Height.height_38,
  },
  categoryTypo: {
    fontSize: FontSize.fs_12,
    textAlign: "left",
  },
  categoryClr: {
    color: Color.successColor,
    alignItems: "center",
    display: "flex",
    lineHeight: LineHeight.lh_38,
  },
  transactionDetailedListspen: {
    backgroundColor: Color.backgroundColorLightMode,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  transactionList: {
    width: Width.width_393,
    height: Height.height_852,
    gap: Gap.gap_28,
    alignItems: "flex-end",
    zIndex: 1,
  },
  header: {
    height: 94,
    paddingBottom: Padding.padding_4,
    flexDirection: "row",
  },
  searchBarContainer: {
    height: Height.height_36,
  },
  controls: {
    height: 538,
    paddingBottom: 433,
  },
  actions: {
    height: Height.height_105,
    zIndex: null,
    gap: Gap.gap_3,
    width: Width.width_360,
  },
  transactionControls: {
    gap: Gap.gap_20,
    height: Height.height_40,
    width: Width.width_360,
    flexDirection: "row",
    zIndex: 1,
  },
  sortControls: {
    width: Width.width_180,
    height: Height.height_62,
    zIndex: 2,
  },
  sortHeader: {
    paddingLeft: Padding.padding_14,
    width: Width.width_101,
    height: Height.height_40,
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
    backgroundColor: Color.mainRed,
    paddingTop: Padding.padding_12,
    gap: Gap.gap_45,
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "row",
    width: Width.width_394,
  },
  iconMoney3: {
    width: Width.width_32_23,
    height: Height.height_32_23,
  },
  icon: {
    height: "100%",
    nodeWidth: 32,
    nodeHeight: 32,
    width: "100%",
  },
  transactionContainer: {
    height: 988,
    marginTop: -546,
  },
  transactionItems: {
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
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    paddingLeft: Padding.padding_8,
    paddingTop: Padding.padding_14,
    height: Height.height_80,
    paddingBottom: Padding.padding_13,
    overflow: "hidden",
    width: Width.width_360,
  },
  iconMoney2Wrapper: {
    width: Width.width_39,
    height: Height.height_46,
    paddingTop: Padding.padding_7,
    zIndex: 2,
  },
  itemDetailsParent: {
    width: Width.width_303,
    height: Height.height_53,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  itemDetails: {
    width: Width.width_218,
    height: Height.height_53,
    zIndex: 2,
  },
  transactionDetail: {
    width: Width.width_221,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    zIndex: 1,
    alignItems: "center",
    display: "flex",
    lineHeight: LineHeight.lh_38,
    textAlign: "left",
    color: Color.colorBlack,
  },
  dateCategoryDetailsParent: {
    width: Width.width_135_1,
    marginTop: -2,
    height: Height.height_17,
    zIndex: 2,
    alignItems: "flex-end",
  },
  dateCategoryDetails: {
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
    alignItems: "center",
    display: "flex",
    lineHeight: LineHeight.lh_38,
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
  emptyItems: {
    width: Width.width_98,
    height: Height.height_42,
    marginLeft: -13,
    zIndex: 1,
    justifyContent: "flex-end",
    paddingBottom: Padding.padding_4,
  },
  emptyDividers: {
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

export default TransactionDetailedListSpendingDate;
