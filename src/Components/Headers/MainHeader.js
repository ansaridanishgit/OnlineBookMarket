import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { ShoppingCart, MoreVertical, Menu } from 'lucide-react-native';

export default function MainHeader({ navigation }) {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent={true} />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Left side - Title */}
                <View style={styles.leftContainer}>
                    <Text style={styles.appName}>Book Market</Text>
                </View>

                {/* Right side - Icons */}
                <View style={styles.rightContainer}>
                   
                    {/* Cart Button */}
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => navigation.navigate('CartScreen')}
                    >
                        <ShoppingCart color="#292929" size={24} />
                    </TouchableOpacity>
                     {/* More Button */}
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => navigation.navigate('MoreScreen')}
                    >
                        <Menu color="#292929" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#fff',
        height: 80,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        paddingBottom: 5,
        borderBottomColor: '#E0E0E0',
        justifyContent: 'flex-end',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    appName: {
        fontSize: 22,
        color: '#292929',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginLeft: 14,
    },
});
