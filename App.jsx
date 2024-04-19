import React from 'react';
import { StatusBar as ExporStatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, SafeAreaView, Platform, StatusBar as Bar,
} from 'react-native';
import { Searchbar, MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Bar.currentHeight + 1,
  },
  search: {
    padding: 16,
    backgroundColor: MD2Colors.grey200,
    marginTop: Platform.OS === 'android' ? Bar.currentHeight + 1 : 0,
  },
  searchBar: {
    backgroundColor: MD2Colors.grey50,
  },
  list: { flex: 1, padding: 16, backgroundColor: 'blue' },
});

const StatusBarStyles = {
  AUTO: 'auto',
};

const SearchBarTheme = {
  colors: {
    primary: MD2Colors.blue500,
  },
};

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Buscar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            theme={SearchBarTheme.colors}
            style={styles.searchBar}
          />
        </View>
        <View style={styles.list}>
          <Text>Lista:</Text>
        </View>
      </SafeAreaView>
      <ExporStatusBar style={StatusBarStyles.AUTO} />
    </>
  );
}
