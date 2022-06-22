import {NewsCategory} from '../constants';
import {apiClient} from './../api/index';
export const GET_NEWS_FEED = 'GET_NEWS_FEED';

//  Make an API call to get the top headlines in the business category

export const getNewsFeed =
  (setIsLoading: Function, category: String = NewsCategory.business) =>
  async (dispatch: Function) => {
    try {
      setIsLoading(true);
      const res = await apiClient.get(
        `top-headlines?language=pt&category=${category}`,
      );
      setIsLoading(false);

      // If we receive a successful response from the API, then we update the newsFeed state with the new articles received.

      if (res.status === 200) {
        dispatch({
          type: GET_NEWS_FEED,
          payload: res?.data?.articles,
        });
      } else {
        // If don't have success...
        console.warn('Something is wrong...');
      }
    } catch (err) {
      console.error(err);
    }
  };
