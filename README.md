# OCRScanner
A hybrid application for text recognition built using React Native. This application allows users to select an existing image from their device or capture a new image using the camera, and then extract text from that image. The text recognition is performed on-device, meaning it does not require an internet connection.

## Features
- Select an existing image from the device gallery.
- Capture a new image using the device camera.
- Extract text from the selected/captured image.
- On-device text recognition (no internet connection required).

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or Yarn
- React Native CLI: `npm install -g react-native-cli` or `yarn global add react-native-cli`
- Xcode (for iOS development on macOS)
- Android Studio and Android SDK (for Android development)
- CocoaPods (for iOS, if not already installed: `sudo gem install cocoapods`)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/OCRScanner.git
   cd OCRScanner
   ```
2. Install project dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Install iOS dependencies (if developing for iOS):
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the Project

### For iOS
```bash
npx react-native run-ios
# or
yarn react-native run-ios
```
Alternatively, you can open `ios/OCRScanner.xcworkspace` in Xcode and run the project from there.

### For Android
```bash
npx react-native run-android
# or
yarn react-native run-android
```
Alternatively, you can open the `android` folder in Android Studio and run the project from there.

## Key Packages Used
- [react-native-image-picker](https://www.npmjs.com/package/react-native-image-picker) for selecting images from device.
- [RNCamera](https://react-native-camera.github.io/react-native-camera/docs/rncamera) (or a similar camera module, please verify which one is in use if RNCamera is a placeholder) for capturing new images.
- [react-native-text-recognition](https://www.npmjs.com/package/react-native-text-recognition) for extracting text from images.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details (if you choose to add one).
