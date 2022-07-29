import React from "react";

import { StyleSheet, View, Image, Dimensions } from "react-native";

import Comments from "../Comments";
import Author from "../Author";

import AddComment from "../AddComment";

export default function Post({image, comments}){
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <Author email='fulano@gmail.com'/>
            <Comments comments={comments}/>
            <AddComment />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})