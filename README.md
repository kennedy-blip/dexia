# AuraSync

AuraSync is a local-first omni-task and personal finance workspace built with React, Vite, Dexie, Framer Motion and Capacitor.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

Import this repository into Vercel with the Vite framework preset. Build command: `npm run build`; output directory: `dist`.

## Android

```bash
npm run build
npx cap sync android
npx cap open android
```

Build a signed release APK from Android Studio. Add the generated APK at `public/downloads/aurasync.apk` to enable the in-app download center.

## Storage and roles

Data is stored locally in IndexedDB. The Admin/Member selector is a local demo privilege mode, not an authenticated security boundary. Add a trusted identity provider and server-side authorization before using this for shared or sensitive financial data.
