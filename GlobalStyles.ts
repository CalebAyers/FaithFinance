import { scale, verticalScale, scaleFont } from './utils/responsive';

/* Fonts */
export const FontFamily = {
  instrumentSansSemiBold: "Inter-SemiBold",
  interMedium: "Inter-Medium",
  interSemiBold: "Inter-SemiBold",
};
/* Font sizes - Responsive */
export const FontSize = {
  fs_10: scaleFont(10),
  fs_12: scaleFont(12),
  fs_13: scaleFont(13),
  fs_14: scaleFont(14),
  fs_16: scaleFont(16),
  fs_18: scaleFont(18),
};
/* Colors */
export const Color = {
  backgroundColorLightMode: "#e5e5e5",
  backgroundColorLightMode1: "#2c2c2c",
  colorBlack: "#000",
  colorDarkslategray: "#333",
  colorGoldenrod100: "#d4af37",
  colorGoldenrod200: "#daa520",
  colorOldlace: "rgba(255, 249, 230, 0)",
  componentsBackgrounf: "#fff9e6",
  gOLD3: "#e1ad01",
  goldButton: "#c99700",
  mainRed: "#8b0000",
  successColor: "#27ae60",
};
/* Gaps - Responsive */
export const Gap = {
  gap_3: scale(3),
  gap_4: scale(4),
  gap_8: scale(8),
  gap_10: scale(10),
  gap_11: scale(11),
  gap_12: scale(12),
  gap_14: scale(14),
  gap_16: scale(16),
  gap_20: scale(20),
  gap_32: scale(32),
  gap_40: scale(40),
  gap_45: scale(45),
};
/* Paddings - Responsive */
export const Padding = {
  padding_0: 0,
  padding_1: scale(1),
  padding_2: scale(2),
  padding_4: scale(4),
  padding_5: scale(5),
  padding_8: scale(8),
  padding_10: scale(10),
  padding_12: scale(12),
  padding_13: scale(13),
  padding_14: scale(14),
  padding_16: scale(16),
  padding_18: scale(18),
  padding_19: scale(19),
  padding_20: scale(20),
  padding_21: scale(21),
  padding_22: scale(22),
  padding_24: scale(24),
  padding_28: scale(28),
  padding_30: scale(30),
  padding_65: scale(65),
};
/* Margins - Responsive */
export const Margin = {
  m_0: 0,
};
/* border radiuses - Responsive */
export const Border = {
  br_4: scale(4),
  br_6: scale(6),
  br_8: scale(8),
  br_12: scale(12),
};
/* box shadows */
export const BoxShadow = {
  shadow_drop: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  shadow_drop1: "0px 4px 12px rgba(0, 0, 0, 0.25)",
  shadow_drop2: "0px 4px 20px rgba(0, 0, 0, 0.15)",
  shadow_drop3: "0px -2px 6px rgba(0, 0, 0, 0.2)",
  shadow_drop4: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  shadow_drop5: "1px 3px 4px rgba(0, 0, 0, 0.25)",
};
/* width - Responsive */
export const Width = {
  width_12: scale(12),
  width_16: scale(16),
  width_26: scale(26),
  width_32: scale(32),
  width_32_23: scale(32),
  width_39: scale(39),
  width_50: scale(50),
  width_54: scale(54),
  width_60: scale(60),
  width_64: scale(64),
  width_70: scale(70),
  width_100: scale(100),
  width_103: scale(103),
  width_104: scale(104),
  width_107: scale(107),
  width_125: scale(125),
  width_170: scale(170),
  width_173: scale(173),
  width_278: scale(278),
  width_290: scale(290),
  width_360: scale(360),
  width_362: scale(362),
  width_375: scale(375),
  width_394: scale(394),
  width_400: scale(400),
  width_453: scale(453),
  width_9_03: scale(9),
};
/* height - Responsive */
export const Height = {
  height_8: verticalScale(8),
  height_12: verticalScale(12),
  height_16: verticalScale(16),
  height_19: verticalScale(19),
  height_20_8: verticalScale(21),
  height_23_4: verticalScale(23),
  height_28: verticalScale(28),
  height_26: verticalScale(26),
  height_32: verticalScale(32),
  height_32_23: verticalScale(32),
  height_38: verticalScale(38),
  height_39: verticalScale(39),
  height_40: verticalScale(40),
  height_45: verticalScale(45),
  height_47: verticalScale(47),
  height_50: verticalScale(50),
  height_53: verticalScale(53),
  height_60: verticalScale(60),
  height_75: verticalScale(75),
  height_80: verticalScale(80),
  height_90: verticalScale(90),
  height_100: verticalScale(100),
  height_117: verticalScale(117),
  height_150: verticalScale(150),
  height_852: verticalScale(852),
  height_854: verticalScale(854),
  height_912: verticalScale(912),
};
/* line-height - Responsive */
export const LineHeight = {
  lh_25: scaleFont(25),
  lh_28: scaleFont(28),
  lh_38: scaleFont(38),
};
/* max-width - Responsive */
export const MaxWidth = {
  max_w_326: scale(326),
  max_w_360: scale(360),
};
