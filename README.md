# newsly-app

[![Based On Badge](https://img.shields.io/badge/Based%20on-this%20article-red)](https://blog.logrocket.com/create-news-feed-react-native/)

An application created to display news using [redux](https://redux.js.org/) and [redux-persist](https://github.com/rt2zz/redux-persist) with async storage.

## Screenshots

![Screenshots](./.github/screenshot.png)

## Technologies

- [React Native](https://reactnative.dev/)
- [Redux](https://redux.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [CodePush](https://appcenter.ms/)

## How to install 🚀

Clone into your prefered folder:

```
git clone git@github.com:lucalves/newsly-app.git

cd newsly-app

yarn

pod install (only for iOS)

yarn ios (or yarn android)
```

## Generate NewsAPI Credentials

This application uses the [NewsAPI](https://newsapi.org/) to render the news.

```
1. Go to: https://newsapi.org/

2. Click on Get API Key

3. Create your own account

4. Paste into src/api/index.ts instead of <YOUR API KEY>
```

## License

MIT
