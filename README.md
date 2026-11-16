# AuraSync

AuraSync is a responsive, local-first task, habit and personal-finance workspace built with React, Vite, Dexie, Framer Motion, Tailwind CSS and Capacitor.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Import `kennedy-blip/dexia` into Vercel. The included `vercel.json` configures the Vite build:

- Build command: `npm run build`
- Output directory: `dist`

## Android build

Install Android Studio and its Android SDK, then run these commands:

```bash
npm install
npm run android:add       # first time only
npm run android:sync
npm run android:open
```

In Android Studio, create a signed release APK. Copy the signed APK to `public/downloads/aurasync.apk`, commit it, and redeploy the web app. Then set `APK_READY = true` in `src/components/DownloadAPKModal.tsx` to enable the in-app download link. The download is deliberately disabled until a real APK exists.

## Local data and important security notes

Tasks, habits and transactions persist in the device/browser IndexedDB database and the web shell is cached for offline launch. This starter does not include a cloud sync backend or multi-user authentication. Admin/Member is a client-side demonstration mode; it is not a security boundary. Before using shared or sensitive financial records, add authenticated users, server-side role enforcement, secure APIs and a properly designed sync service.