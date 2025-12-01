# FaithFinance - Setup Instructions

Follow these steps to set up and run the FaithFinance app on your local machine.

## Prerequisites

Before you start, make sure you have the following installed:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **Git**
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

3. **Expo Go App** (on your phone)
   - iOS: Download from App Store
   - Android: Download from Google Play Store

## Setup Steps

### 1. Clone the Repository

```bash
git clone https://github.com/CalebAyers/FaithFinance.git
cd FaithFinance
```

### 2. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- Expo SDK 54
- React Native 0.81.5
- React Navigation
- All other dependencies listed in package.json

**Note:** This may take several minutes the first time.

### 3. Start the Development Server

```bash
npm start
```

Or use:

```bash
npx expo start
```

**If you encounter cache issues, use:**

```bash
npx expo start --clear
```

### 4. Run on Your Device

Once the server starts, you'll see a QR code in your terminal.

**On iOS:**
1. Open the Camera app
2. Scan the QR code
3. Tap the notification to open in Expo Go

**On Android:**
1. Open Expo Go app
2. Tap "Scan QR code"
3. Scan the QR code from your terminal

## Common Issues & Solutions

### Issue: "Unable to resolve module"
**Solution:** Clear the cache and restart
```bash
npx expo start --clear
```

### Issue: "Metro bundler not starting"
**Solution:** Stop all Node processes and restart
```bash
# Windows PowerShell:
Stop-Process -Name "node" -Force

# Then restart:
npm start
```

### Issue: Font loading errors
**Solution:** The fonts are included in `assets/fonts/`. Make sure the entire assets folder is committed to git.

### Issue: SVG files not loading
**Solution:** Make sure `react-native-svg-transformer` is installed (it's in devDependencies)

### Issue: TypeScript errors about deleted files
**Solution:** Restart TypeScript server in VS Code:
- Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
- Type "TypeScript: Restart TS Server"
- Press Enter

## Project Structure

```
FaithFinance/
├── assets/              # Images, fonts, SVG icons
├── components/          # Reusable UI components
├── screens/             # Main app screens
├── App.tsx             # App entry point
├── GlobalStyles.ts     # Shared styles and constants
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript configuration
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator (Mac only)
- `npm run web` - Run in web browser

## Development Tips

1. **Hot Reload:** Changes to your code will automatically reload in the app
2. **Reload Manually:** Shake your device or press `R` in the terminal
3. **Dev Menu:** Shake your device or press `D` in the terminal
4. **Restart Metro:** Press `Ctrl+C` in terminal, then `npm start` again

## Need Help?

If you're still having issues:
1. Make sure Node.js is version 18 or higher: `node --version`
2. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```
3. Clear Expo cache:
   ```bash
   npx expo start --clear
   ```
4. Check that all files were properly cloned from git

## Contact

If problems persist, contact the team lead or check the project's GitHub Issues page.
