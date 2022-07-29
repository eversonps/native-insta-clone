import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Alert } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function AddComment(){
    const [editMode, setEditMode] = useState(false)
    const [comment, setComment] = useState('')

    function handleAddComment(){
        Alert.alert('Adicionado!', comment)
    }

    return (
        <View style={{flex: 1}}>
            { editMode ? <View style={styles.container}>
                <TextInput placeholder="Pode começar..." style={styles.input} autoFocus={true} value={comment} onChangeText={comment => setComment(comment)} onSubmitEditing={handleAddComment}/>
                <TouchableWithoutFeedback onPress={() => setEditMode(false)}>
                    <Icon name='times' size={15} color='#555'/>
                </TouchableWithoutFeedback>
            </View> :
            <TouchableWithoutFeedback onPress={() => setEditMode(true)}>
                <View style={styles.container}>
                    <Icon name="comment-o" size={25} color='#555'/>
                    <Text style={styles.caption}>Adicione um comentário</Text>
                </View>
            </TouchableWithoutFeedback>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
})