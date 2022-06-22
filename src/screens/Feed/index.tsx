import React, {useCallback, useEffect, useState} from 'react';
import {View, useColorScheme, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import {getNewsFeed} from '../../redux/actions';
import styles from './styles';
import {NewsArticle} from '../../components/NewsArticle';
import {NewsTags} from '../../components/NewsTags';
import {NewsCategory} from '../../constants';

export const Feed: React.FC = () => {
  const {newsFeed} = useSelector((state: any) => state.feedReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    NewsCategory.business,
  );
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getNewsFeed(setIsLoading, selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleRefresh = useCallback(() => {
    dispatch(getNewsFeed(setIsLoading, selectedCategory));
  }, [dispatch, selectedCategory]);

  const backgroundColor = useColorScheme() === 'dark' ? '#222' : '#fff';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <NewsTags
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FlatList
        keyExtractor={(): any => uuid.v4()?.toString()}
        showsVerticalScrollIndicator={false}
        data={newsFeed}
        renderItem={({item, index}: any) => <NewsArticle post={item} />}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
        style={styles.list}
      />
    </View>
  );
};
