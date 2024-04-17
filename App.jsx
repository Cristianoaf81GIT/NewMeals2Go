import React from 'react';
import { StatusBar as ExporStatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, SafeAreaView, Platform, StatusBar as Bar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Bar.currentHeight + 1,
  },
  search: {
    padding: 16,
    backgroundColor: 'green',
    marginTop: Platform.OS === 'android' ? Bar.currentHeight + 1 : 0,
  },
  list: { flex: 1, padding: 16, backgroundColor: 'blue' },
});

const StatusBarStyles = {
  AUTO: 'auto',
};

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Busca:</Text>
        </View>
        <View style={styles.list}>
          <Text>Lista:</Text>
        </View>
      </SafeAreaView>
      <ExporStatusBar style={StatusBarStyles.AUTO} />
    </>
  );
}
