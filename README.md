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

## Automated signed APK publishing

The repository includes a manual GitHub Actions workflow at **Actions → Android signed release → Run workflow**. Before running it, configure these four Actions repository secrets under **Settings → Secrets and variables → Actions**:

- `ANDROID_KEYSTORE_BASE64`: your release keystore file encoded as Base64.
- `ANDROID_KEYSTORE_PASSWORD`: keystore password.
- `ANDROID_KEY_ALIAS`: key alias.
- `ANDROID_KEY_PASSWORD`: key password.

Keep the keystore and passwords private; never commit them or paste them into source files. Use the same release keystore for future updates so Android can recognize later builds as updates to the installed app. The workflow builds an APK using Android's `apksigner`, copies it to `public/downloads/aurasync.apk`, enables the download modal, and pushes the result to `main`. A connected Vercel Git deployment should then redeploy automatically.

If you prefer a manual build, create a signed release APK in Android Studio, copy it to `public/downloads/aurasync.apk`, and set `APK_READY = true` in `src/components/DownloadAPKModal.tsx` before committing. The download remains disabled until an actual APK is present.

## Local data and important security notes

Tasks, habits and transactions persist in the device/browser IndexedDB database and the web shell is cached for offline launch. This starter does not include a cloud sync backend or multi-user authentication. Admin/Member is a client-side demonstration mode; it is not a security boundary. Before using shared or sensitive financial records, add authenticated users, server-side role enforcement, secure APIs and a properly designed sync service.