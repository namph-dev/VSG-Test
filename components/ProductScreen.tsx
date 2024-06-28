import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';
import ProductInfo from './order/ProductInfo';
import ImageGallery from './order/ImageGallery';
import { fetchProducts, insertProduct } from '../database';

const ProductScreen = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    console.log(products,'kkkk')
    useEffect(() => {
        fetchProducts((fetchedProducts) => {
            console.log(fetchedProducts, "aaa")
            setProducts(fetchedProducts);
            if (fetchedProducts.length > 0) {
                setSelectedProductId(fetchedProducts[0].id);
            }
        });
    }, []);

    const selectedProduct = products.find(product => product.id === selectedProductId);

    const handleAddProduct = (newProduct) => {
        insertProduct(newProduct.id, newProduct.uri, newProduct.name, newProduct.code);
        setProducts([...products, newProduct]);
        setSelectedProductId(newProduct.id);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ProductInfo selectedProduct={selectedProduct} />
            <View style={styles.buttonContainer}>
                <Button title="Thêm Sản Phẩm" onPress={() => handleAddProduct({
                    id: (products.length + 1).toString(),
                    uri: 'https://example.com/new-product.jpg',
                    name: `Sản phẩm ${products.length + 1}`,
                    code: `#SP00${products.length + 1}`
                })} />
                <Button title="Lưu Sản Phẩm" onPress={() => handleAddProduct(selectedProduct)} />
            </View>
            <ImageGallery
                products={products}
                selectedProductId={selectedProductId}
                setSelectedProductId={setSelectedProductId}
                onAddImage={handleAddProduct}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
});

export default ProductScreen;
