import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { color, greaterThan } from 'react-native-reanimated';
import { back } from 'react-native/Libraries/Animated/src/Easing';

const Skip = ({...props}) => (
    <TouchableOpacity>
        <Text {...props}>Omitir</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity>
        <Text {...props}>Siguiente</Text>
    </TouchableOpacity>
    
);

const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0,0,0.8)' : 'rgba(0,0,0,0.3)';

    return (
        <View
        style={{
            width:6,
            height:6,
            marginHorizontal:3,
            backgroundColor
        }}/>
    )
}

/* const Done = ({...props}) => (
    <TouchableOpacity>
        <Text {...props}>Siguiente</Text>
    </TouchableOpacity>
) */

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
      //  DotComponent={Dots}
       // DoneButtonComponent={Done}
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: 'pink',
                    image: <Image
                        style={styles.image}
                        source={require('../../assets/onboarding1.png')} />,
                    title: 'Onboarding 1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image
                        style={styles.image}
                        source={require('../../assets/onboarding2.jpg')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: 'orange',
                    image: <Image
                        style={styles.image}
                        source={require('../../assets/onboarding3.png')}
                    />,
                    title: 'Onboarding3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
    },
    done: {
        textDecorationColor: 'green',
    }
});