---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

This section attempts to outline issues that can happen during setup and may not be related to React Navigation itself. Also see [common mistakes](common-mistakes.md).

Before troubleshooting an issue, make sure that you have upgraded to **the latest available versions** of the packages. You can install the latest versions by installing the packages again (e.g. `npm install package-name`).

## I'm getting an error "Unable to resolve module" after updating to the latest version

This might happen for 2 reasons:

- Incorrect cache of Metro bundler
- Missing peer dependency

If the module points to a local file (i.e. the name of the module starts with `./`), then it's probably due to incorrect cache. To fix this, try the following solutions.

If you're using Expo, run:

```bash
expo start -c
```

If you're not using Expo, run:

```bash
npx react-native start --reset-cache
```

If the module points to an npm package (i.e. the name of the module doesn't with `./`), then it's probably due to a missing peer dependency. To fix this, install the dependency in your project:

```bash npm2yarn
npm install name-of-the-module
```

## I'm getting an error "null is not an object (evaluating 'RNGestureHandlerModule.default.Direction')"

This and some similar errors might occur if you didn't link the [`react-native-gesture-handler`](https://github.com/software-mansion/react-native-gesture-handler) library.

- **React Native 0.60 and higher**

  On newer versions of React Native, [linking is automatic](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md), so if you have linked the library manually, first unlink it:

  ```bash
  react-native unlink react-native-gesture-handler
  ```

  If you're testing on iOS and use Mac, make sure you have run `pod install` in the `ios/` folder:

  ```bash
  cd ios; pod install; cd ..
  ```

- **React Native 0.59 and lower**

  If you're on an older React Native version, you need to manually link the library. To do that, run:

  ```bash
  react-native link react-native-gesture-handler
  ```

Now rebuild the app and test on your device or simulator.

## I'm getting an error "TypeError: Cannot read property 'bind' of undefined" or "TypeError: propListener.apply is not a function"

This error can often happen if you have a Babel plugin that compiles the code in a non-spec compliant way. For example:

```bash
["@babel/plugin-proposal-class-properties", { "loose": true}]
```

The above compiles class properties in `loose` mode, which is not spec compliant. To prevent such issues, avoid using any additional Babel plugins or presets which change the way Metro compiles code by default. Your `babel.config.js` should look like this:

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};
```

Or if you're using Expo:

```js
module.exports = {
  presets: ['babel-preset-expo'],
};
```

If you have additional options configured here, try removing them to see if it fixes the issue. After changing config, always clear the cache.

If you're using Expo, run:

```bash
expo start -c
```

If you're not using Expo, run:

```bash
npx react-native start --reset-cache
```

## I linked `react-native-gesture-handler` library but gestures won't work on Android

This might happen if you didn't update your MainActivity.java file (or wherever you create an instance of ReactActivityDelegate), so that it uses the root view wrapper provided by this library.

Check how to do it [here](https://software-mansion.github.io/react-native-gesture-handler/docs/getting-started.html).

## App is not working properly when connected to Chrome Debugger

When the app is connected to Chrome Debugger (or other tools that use Chrome Debugger such as [React Native Debugger](https://github.com/jhen0409/react-native-debugger)) you might encounter various issues related to timing.

This can result in issues such as button presses taking a long time to register or not working at all, [gestures and animations being slow and buggy](https://github.com/facebook/react-native/issues/2367) etc. There can be other functional issues such as promises not resolving, [timeouts and intervals not working correctly](https://github.com/facebook/react-native/issues/4470) etc. as well.

The issues are not related to React Navigation, but due to the nature of how the Chrome Debugger works. When connected to Chrome Debugger, your whole app runs on Chrome and communicates with the native app via sockets over the network, which can introduce latency and timing related issues.

So, unless you are trying to debug something, it's better to test the app without being connected to the Chrome Debugger. If you are using iOS, you can alternatively use [Safari to debug your app](https://reactnative.dev/docs/debugging#safari-developer-tools) which debugs the app on the device directly and does not have these issues, though it has other downsides.
