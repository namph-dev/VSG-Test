import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const ImageGallery = ({ products, selectedProductId, setSelectedProductId, onAddImage }) => {
    return (
        <ScrollView horizontal style={styles.imageGallery}>
            <TouchableOpacity style={styles.addButton} onPress={onAddImage}>
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
