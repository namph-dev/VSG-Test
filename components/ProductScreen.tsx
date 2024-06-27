import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductInfo from './order/ProductInfo';
import ImageGallery from './order/ImageGallery';

const products = [
    { id: '1', uri: 'https://phamthao.vn/wp-content/uploads/2020/11/sss.jpg', name: 'Sản phẩm 1', code: '#SP001' },
    { id: '2', uri: 'https://htmediagroup.vn/wp-content/uploads/2021/12/Ao-pijama-6-min.jpg', name: 'Sản phẩm 2', code: '#SP002' },
    { id: '3', uri: 'https://vsmall.vn/wp-content/uploads/2022/07/cach-chup-anh-quan-ao-dep-bang-dien-thoai.png', name: 'Sản phẩm 3', code: '#SP003' }
];

const ProductScreen = () => {
    const [selectedProductId, setSelectedProductId] = useState(products[0]?.id);

    const selectedProduct = products.find(product => product.id === selectedProductId);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ProductInfo selectedProduct={selectedProduct} />
            <ImageGallery
                products={products}
                selectedProductId={selectedProductId}
                setSelectedProductId={setSelectedProductId}
                onAddImage={''}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default ProductScreen;
