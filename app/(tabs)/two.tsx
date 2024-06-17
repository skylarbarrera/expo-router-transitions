import { StyleSheet } from 'react-native';


import { Text, View } from '../../components/Themed';
import Animated from 'react-native-reanimated';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Animated.View
    style={{ width: 150, height: 50, backgroundColor: 'red' }}
    sharedTransitionTag="sharedTag"
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
