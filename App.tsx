import { SafeAreaView, useColorScheme, View, StatusBar} from 'react-native';
import AppManager from './src/manager/AppManager';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <SafeAreaProvider>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppManager />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
