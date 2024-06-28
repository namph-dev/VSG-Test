import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

const ImageGallery = ({ products, selectedProductId, setSelectedProductId, setProducts }) => {
    const addImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (!pickerResult.cancelled) {
            const newProduct = {
                id: (products.length + 1).toString(),
                uri: pickerResult.uri,
                name: `Sản phẩm ${products.length + 1}`,
                code: `#SP00${products.length + 1}`
            };
            setProducts([...products, newProduct]);
        }
    };

    return (
        <ScrollView horizontal style={styles.imageGallery}>
            <TouchableOpacity style={styles.addButton} onPress={addImage}>
                <View style={styles.addImageContainer}>
                    <Icon name="add" type="ionicon" size={50} color="blue" />
                    <Text style={styles.addText}>Thêm ảnh</Text>
                </View>
            </TouchableOpacity>
            {products.map((product) => (
                <TouchableOpacity
                    key={product.id}
                    onPress={() => setSelectedProductId(product.id)}
                    style={styles.thumbnailContainer}
                >
                    <Image
                        style={[
                            styles.thumbnail,
                            selectedProductId === product.id && styles.activeThumbnail
                        ]}
                        source={{ uri: product.uri }}
                    />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageGallery: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    addImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#d9d9d9',
        borderRadius: 10,
        padding: 10,
    },
    addText: {
        marginTop: 5,
        color: 'blue',
    },
    thumbnailContainer: {
        marginRight: 10,
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#d9d9d9',
    },
    activeThumbnail: {
        opacity: 0.5,
    },
});

export default ImageGallery;
