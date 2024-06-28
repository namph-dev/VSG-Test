import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/order/Header';
import TabNavigation from '@/components/order/TabNavigation';
import ProductScreen from '@/components/ProductScreen';
import Summary from '@/components/order/Summary';
import Table from '@/components/order/Table';
import { init } from '../../database';
import { Button } from 'react-native-elements';

const App = () => {
  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Header />
        <TabNavigation />
        <View style={styles.section}>
          <Button title="Danh mục sp" type="outline" />
          <Button title="Nhà cung cấp" type="outline" />
        </View>
        <ProductScreen />
        <Summary />
        <Table />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
  },
});

export default App;
