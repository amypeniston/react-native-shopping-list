import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Icon name='remove' size={20} color='#4B5262' onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#282C34',
        borderBottomWidth: 1.5,
        borderColor: '#4B5262'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItemText: {
        fontSize: 20,
        color: '#eee'
    }
})

export default ListItem;