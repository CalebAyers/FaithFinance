# FaithFinance - Setup Guide

Quick setup instructions for running FaithFinance.

---

## Prerequisites

**Required:**
- **Node.js** v23+ ([nodejs.org](https://nodejs.org/))
- **npm** (comes with Node.js)

**For iOS (MacOS only):**
- **Xcode** 12+
- Command Line Tools: `xcode-select --install`

**For Android:**
- **Android Studio** with SDK (API 21+)

**Quick Testing (Optional):**
- **Expo Go** app (App Store / Google Play)

---

## Installation

```bash
# 1. Clone or download project
git clone https://github.com/CalebAyers/FaithFinance.git
cd FaithFinance

# 2. Install dependencies (takes 2-5 min)
npm install

# 3. Start development server
npx expo start
```

---

## Key Dependencies

**Framework:**
- `react-native` - Mobile framework
- `expo` - Development tools
- `typescript` - Type safety

**Navigation:**
- `@react-navigation/native` - Screen navigation
- `@react-navigation/stack` - Screen transitions
- `@react-navigation/bottom-tabs` - Bottom nav bar

**Data & UI:**
- `@react-native-async-storage/async-storage` - Local storage
- `react-native-chart-kit` - Charts
- `react-native-svg` - Vector graphics
- `@expo/vector-icons` - Icons
- `expo-font` - Custom fonts

See `package.json` for complete list.

---

## Common Commands

```bash
npm start                  # Start dev server
npx expo start --clear     # Clear cache
npx expo start --ios       # Run iOS
npx expo start --android   # Run Android
```
---

## Troubleshooting

**Module errors:**
```bash
npx expo start --clear
```

**TypeScript errors:**
- VS Code: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

**Clean reinstall:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
npx expo start --clear
```

---

## Resources

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)

---

**See [README.md](README.md) for app overview and accessibility info.**  
**See [DATA_USAGE.md](DATA_USAGE.md) for working with data.**
