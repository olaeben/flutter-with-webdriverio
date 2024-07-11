# flutter-with-webdriverio

## FashionApp

FashionApp is a cross-platform mobile application built with Flutter by Mtconcept (https://github.com/Mtconcept/store_ui), designed to provide users with the latest fashion trends, products, and personalized style recommendations. This README provides detailed instructions on setting up the development environment, running the app, and automating tests using WebdriverIO, Appium, and Mocha with the Page Object Model (POM) for both Android and iOS versions, along with generating reports using Allure Report.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Flutter Setup](#flutter-setup)
  - [Project Dependencies](#project-dependencies)
- [Running the App](#running-the-app)
  - [Android](#android)
  - [iOS](#ios)
- [Automated Testing](#automated-testing)
  - [Setup WebdriverIO](#setup-webdriverio)
  - [Running Tests](#running-tests)
  - [Test Reports](#test-reports)
- [Contributing](#contributing)


## Prerequisites

Before you begin, ensure you have the following installed:

- [Flutter](https://flutter.dev/docs/get-started/install)
- [Dart](https://dart.dev/get-dart)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Node.js](https://nodejs.org/) (for WebdriverIO)
- [Appium](http://appium.io/docs/en/about-appium/getting-started/)
- [Allure Commandline](https://docs.qameta.io/allure/#_installing_a_commandline)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/olaeben/flutter-with-webdriverio.git
```

### Flutter Setup

Ensure Flutter is correctly installed and all dependencies are resolved:

```bash
flutter doctor
flutter pub get
```

### Project Dependencies

Install the required dependencies for automated testing:

```bash
npm install
```

## Running the App

### Android

1. Start an Android emulator or connect an Android device.
2. Run the app:

```bash
flutter run
```

### iOS

1. Start an iOS simulator or connect an iOS device.
2. Run the app:

```bash
flutter run
```

## Automated Testing

### Setup WebdriverIO

WebdriverIO is configured with Appium and Mocha to automate tests for both Android and iOS versions of the app using the Page Object Model.

#### Install WebdriverIO CLI

```bash
npm install -g @wdio/cli
```

#### Initialize WebdriverIO

If not already initialized, set up WebdriverIO in your project directory:

```bash
npx wdio config
```

Follow the prompts to configure WebdriverIO. Ensure you select Mocha as the test framework and Appium as the service.

### Running Tests

Tests are organized using the Page Object Model (POM) for better maintainability and scalability.

#### Android

To run tests on the Android version:

```bash
npm run apk
```

#### iOS

To run tests on the iOS version:

```bash
npm run ios
```

### Test Reports

Test results and reports are generated using Allure Report. To generate the test report:

1. Ensure you have Allure Commandline installed:

```bash
npm install -g allure-commandline --save-dev
```

2. Run the tests to generate results in the `allure-results` directory.
3. Generate the Allure report:

```bash
allure generate allure-results --clean -o allure-report
```

4. Open the Allure report:

```bash
allure open allure-report
```


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Open a pull request


This README provides a comprehensive overview and guide to setting up, running, and testing the FashionApp with WebdriverIO.
