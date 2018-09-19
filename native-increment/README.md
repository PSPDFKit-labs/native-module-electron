# Native Increment

A native npm example addon that will increment a `number` by one.

This example is used in our article on [Running Native Code in Electron](https://pspdfkit.com/blog/2018/running-native-code-in-electron-and-the-case-for-webassembly).

## Prerequisites

* [Node.js](http://nodejs.org/) (with npm or Yarn)

## Getting Started

```
git clone native-module-electron
cd native-module-electron
yarn
```

## Compiling (for Node.js)

```
yarn global add node-gyp
node-gyp configure
node-gyp build
```

Please refer to [Running Native Code in Electron](https://pspdfkit.com/blog/2018/running-native-code-in-electron-and-the-case-for-webassembly) for instructions on how to compile this package for an Electron application.

## Test

```
node test.js
```
