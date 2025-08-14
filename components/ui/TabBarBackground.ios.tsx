import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';

export default function BlurTabBarBackground() {
  return (
    <View></View>
  );
}

export function useBottomTabOverflow() {
  return useBottomTabBarHeight();
}
