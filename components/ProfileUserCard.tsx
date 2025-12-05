import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { scaleFont } from "../utils/responsive";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

// Profile user card with avatar, name, and stats
type ProfileUserCardProps = {
  userName?: string;
  incomeAmount?: string;
  givingAmount?: string;
  onEditImage: () => void;
  onEditName?: () => void;
};

const ProfileUserCard = ({ 
  userName = "First and Last Name",
  incomeAmount = "$2,245.00",
  givingAmount = "$200.00",
  onEditImage,
  onEditName
}: ProfileUserCardProps) => {
  return (
    <View style={styles.userCard}>
      <View style={styles.userHeader}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={40} color={Color.colorDarkslategray} />
          </View>
          <TouchableOpacity onPress={onEditImage}>
            <Text style={styles.editImageText}>Edit Image</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={styles.userName}>{userName}</Text>
          {typeof onEditName === 'function' && (
            <TouchableOpacity onPress={onEditName}>
              <Text style={[styles.editImageText, styles.editNameText]}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Income</Text>
          <Text style={styles.statValueIncome}>{incomeAmount}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Giving</Text>
          <Text style={styles.statValueGiving}>{givingAmount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: Border.br_12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
  avatarSection: {
    alignItems: 'center',
    gap: 8,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Color.backgroundColorLightMode,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.colorDarkslategray,
  },
  editImageText: {
    fontSize: scaleFont(11),
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
  },
  editNameText: {
    fontSize: scaleFont(12),
    color: Color.gOLD3,
    fontFamily: FontFamily.interMedium,
  },
  userName: {
    fontSize: scaleFont(16),
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    color: Color.colorBlack,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: scaleFont(14),
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    marginBottom: 4,
  },
  statValueIncome: {
    fontSize: scaleFont(16),
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '700',
    color: Color.successColor,
  },
  statValueGiving: {
    fontSize: scaleFont(16),
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '700',
    color: Color.gOLD3,
  },
});

export default ProfileUserCard;
