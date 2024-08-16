import { View, Text, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen2() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
    <ThemedText type="title">Welcome!</ThemedText>
    <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    <ThemedText> 
      Tap the Explore tab to learn more about what's included in this starter app.
    </ThemedText>
    <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>
   </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
