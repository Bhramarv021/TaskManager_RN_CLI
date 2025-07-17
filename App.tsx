import { SafeAreaView, useColorScheme, View, StatusBar} from 'react-native';
import AddTasks from './src/components/AddTasks';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[{backgroundColor: 'grey'}]}>
        <AddTasks />
      </View>
    </SafeAreaView>
  );
}

export default App;
