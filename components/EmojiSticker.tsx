import { View, Text, Image } from 'react-native'
import React from 'react'

export default function EmojiSticker({ imageSize, stickerSource }) {
    return (
        <View style={{ top: -350 }}>
            <Image source={stickerSource}
                resizeMode='contain'
                style={{
                    height: imageSize,
                    width: imageSize
                }} />
        </View>
    )
}
