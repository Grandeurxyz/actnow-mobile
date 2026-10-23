import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello there, this is actNow app</Text>
      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50f3af',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
