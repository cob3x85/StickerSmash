import React from 'react'
import { Image, StyleSheet } from 'react-native'
type Props ={
    placeHolderImage: any;
    selectedImage: string;
}

export const ImageViewer = ({ placeHolderImage, selectedImage }: Props) => {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeHolderImage;
    return (
        <Image source={imageSource} style={styles.image} />

    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})
