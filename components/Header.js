import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0E131D',
        height: 64,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: '#80899D',
        textTransform: 'uppercase',
        letterSpacing: 2
    }
})

export default Header;