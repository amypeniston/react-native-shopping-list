import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');

    const onChange = (text) => setText(text); 

    const handleAddItem = (text) => {
        addItem(text);
        console.log('here');
        setText('');
    }

    return (
        <View>
            <TextInput placeholder="Item name" value={text} style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => handleAddItem(text)}>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20}/> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 15,
        fontSize: 20
    },
    btn: {
        backgroundColor: '#5087F5',
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 16,
        paddingBottom: 16,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem;