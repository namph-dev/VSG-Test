import Header from '@/components/order/Header';
import ImageGallery from '@/components/order/ImageGallery';
import ProductInfo from '@/components/order/ProductInfo';
import Summary from '@/components/order/Summary';
import TabNavigation from '@/components/order/TabNavigation';
import Table from '@/components/order/Table';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';
import ProductScreen from '@/components/ProductScreen';

const CreateOrderScreen = () => {
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

export default CreateOrderScreen;
