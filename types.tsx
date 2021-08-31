/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Posts: undefined;
  Events: undefined;
  Galleries: undefined;
};

export type PostsParamList = {
  PostsScreen: undefined;
  SinglePostScreen: undefined;
};

export type GalleriesParamList = {
  GalleriesScreen: undefined;
  SingleGalleryScreen: undefined;
};

export type EventsParamList = {
  EventsScreen: undefined;
  SingleEventScreen: undefined;
};
