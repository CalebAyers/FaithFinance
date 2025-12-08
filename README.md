# FaithFinance

A mobile finance tracking app combining practical budgeting with Christian faith principles. Helps users manage money with clarity while practicing daily stewardship through Scripture-based encouragement.

**Course**: CSCI 335 - User Interface Design  
**Institution**: Biola University  
**Semester**: Fall 2025  
**Purpose**: UI/UX Demonstration Prototype

---

## Quick Start

**Before running this project, please read [SETUP.md](SETUP.md) for complete installation instructions.**

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npx expo start
```

---

## Features

### Financial Tracking
- **Transaction Management**: Add, edit, delete income, spending, and giving
- **Spending Categories**: Comprehensive expense/income/giving categorization
- **Real-time Analytics**: Pie charts, bar charts, category breakdowns
- **Period Views**: Weekly, monthly, yearly financial summaries --Logic not implemented yet

### Spiritual Integration
- **Daily Bible Verses**: Scripture throughout the app --Fixed amount of verses
- **Favorite Verses**: Save meaningful scriptures
- **Giving Goals**: Set and track giving targets

### User Experience
- **Fully Responsive**: Works on all iPhone sizes (SE to Pro Max)
- **Smooth Navigation**: 5-screen bottom nav with loading transitions
- **Mock Data System**: Demo-ready with clean reset functionality
- **Offline-First**: Local data storage with AsyncStorage

---

## App Structure

### Navigation Flow
```
Loading Screen
    ↓
Welcome Page (Login/Signup)
    ↓
Main App (5 screens)
├── Home: Dashboard overview
├── Transaction: View/filter transactions details
├── Insights: Charts and analytics
├── Reflection: Bible verses
└── Profile: Settings and data management
```

### Key Screens
- **WelcomePage**: Login, signup, or continue as mock user
- **HomePage**: Summary cards, recent transactions, daily verse
- **TransactionPage**: Filterable transaction history
- **InsightPage**: Financial analytics with charts
- **ReflectionPage**: Bible verses with favorites
- **ProfilePage**: User profile, reset data, logout

---

## Technical Details

### Tech Stack
- **Framework**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: React Navigation (Stack Navigator)
- **Storage**: AsyncStorage (local persistence)
- **Charts**: react-native-chart-kit
- **Icons**: Expo Vector Icons (Ionicons)

### Project Structure
```
faithFinance/
├── App.tsx                 # Main navigation
├── screens/               # 9 app screens
├── components/            # 40+ reusable components
├── context/              # DataContext (state management)
├── services/             # StorageService (AsyncStorage)
├── utils/                # Helper functions
├── data/                 # Shared data (Bible verses)
├── assets/               # Images, fonts, SVGs
├── README.md             # Project overview & accessibility
├── SETUP.md              # Installation guide
└── DATA_USAGE.md         # Data management reference
```

### Data Management
For detailed information on working with transactions and user data, see [DATA_USAGE.md](DATA_USAGE.md).

---

## Accessibility

### Compatibility
- ✅ **Platform**: iOS 13.0+
- ✅ **Devices**: iPhone SE (2nd gen) to iPhone 15 Pro Max
- ✅ **Screen Sizes**: 375x667 to 430x932 pixels
- ✅ **Responsive Design**: All dimensions scale proportionally
- ✅ **Font Scaling**: Supports dynamic type

### Accessibility Features
- **High Contrast**: Red (#8b0000) and gold (#e1ad01) primary colors with sufficient contrast ratios
- **Touch Targets**: All buttons minimum 44x44pt (iOS guidelines)
- **Clear Labels**: Descriptive text on all interactive elements
- **Visual Hierarchy**: Consistent font sizes (9pt to 32pt)
- **Color Independence**: Information not conveyed by color alone

### Accessibility Roles Used
```typescript
// Buttons and actions
accessibilityRole="button"         // All TouchableOpacity buttons
accessibilityRole="imagebutton"    // Profile image edit button

// Navigation
accessibilityRole="menu"           // Bottom navigation bar
accessibilityRole="menuitem"       // Individual nav buttons

// Content
accessibilityRole="header"         // AppHeader component
accessibilityRole="image"          // Logo and decorative images
accessibilityRole="alert"          // Confirmation/error alerts
accessibilityRole="adjustable"     // Modal dropdowns
```

### Known Limitations & Workarounds

**Limitation**: Charts (Pie/Bar) not fully accessible to screen readers  
**Workaround**: Numerical summaries provided in StatCard components alongside charts

**Limitation**: Bible verse cards are read-only displays  
**Workaround**: All verses available in text format, can be copied via "Favorite Verses" feature

**Limitation**: No backend authentication  
**Workaround**: UI demonstration only - username saved locally for profile display

**Limitation**: Date pickers use default iOS/Android implementations  
**Workaround**: Keyboard input available as alternative to picker

---

## Documentation

- **[SETUP.md](SETUP.md)** - Complete installation guide with prerequisites
- **[DATA_USAGE.md](DATA_USAGE.md)** - How to work with transactions and data

---

## Notes

- **Demo Prototype**: This is a UI/UX demonstration, not a production app
- **No Backend**: All data stored locally, no cloud sync
- **Mock Authentication**: Username saved for display only
- **Responsive Design**: All dimensions scale based on device size
- **Clean Reset**: "Reset Mock Data" returns to default state

---

## Team

**Lead Developer & Designer**: Alejandro Marchesini  
GitHub: [@AlejandroMarchesini12](https://github.com/AlejandroMarchesini12)

**Team Members**:
- Caleb Ayers - [Role]
- Jiale Zheng - [Role]
- Francesco Pio Centrella - [Role]

---

## Support

For questions or issues:
1. Check [SETUP.md](SETUP.md) for installation troubleshooting
2. Review [DATA_USAGE.md](DATA_USAGE.md) for data management help

---

**Last Updated**: December 7, 2025  
**Version**: 1.0 (Demo Ready)
