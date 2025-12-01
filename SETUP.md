# FaithFinance - Setup Instructions

## What You Need

1. **Node.js** (v18+) - https://nodejs.org/
2. **Git** - https://git-scm.com/
3. **Expo Go** app on your phone (App Store or Google Play)

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/CalebAyers/FaithFinance.git
cd FaithFinance
```

### 2. Install packages
```bash
npm install
```
This takes a few minutes.

### 3. Start the server
```bash
npm start
```

### 4. Run on your phone
- Scan the QR code with your Camera app (iOS) or Expo Go app (Android)
- App will load on your phone

## Troubleshooting

**"Unable to resolve module" error:**
```bash
npx expo start --clear
```

**Metro won't start:**
```bash
Stop-Process -Name "node" -Force  # Windows
npm start
```

**TypeScript errors about missing files:**
- VS Code: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

**Still not working:**
```bash
rm -rf node_modules
npm install
npx expo start --clear
```

## Project Structure
- `assets/` - Images, fonts, icons
- `components/` - Reusable components
- `screens/` - App pages
- `App.tsx` - Entry point

## Commands
- `npm start` - Start dev server
- Press `R` in terminal - Reload app
- Press `D` in terminal - Dev menu
