import React from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Login Screen </Text>
            <Button
                title="Click here"
                onPress={()=> alert("Button Clicked!")}
                />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
         height: 200,
    }
});