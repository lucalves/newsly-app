import {Platform, StyleSheet} from 'react-native';

const boxShadow: any = Platform.select({
  ios: {
    shadowcolor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: {
    elevation: 6,
  },
});

export default StyleSheet.create({
  container: {
    height: 240,
    marginBottom: 18,
    backgroundColor: '#eee',
    borderRadius: 24,
    marginHorizontal: 16,
    ...boxShadow,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 24,
    height: 300,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    paddingBottom: 32,
  },
  timestamp: {
    position: 'absolute',
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    right: 16,
    bottom: 8,
  },
});
