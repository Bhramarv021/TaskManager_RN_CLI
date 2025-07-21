import { SafeAreaView, useColorScheme, View, StatusBar} from 'react-native';
import AppManager from './src/manager/AppManager';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <View style={[{backgroundColor: 'grey'}]}> */}
        {/* <AddTasks /> */}
        <AppManager />
      {/* </View> */}
    </SafeAreaView>
  );
}

export default App;
