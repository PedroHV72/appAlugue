import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Recommended(props) {
 return (
   <ImageBackground
   source={props.cover}
   style={styles.container}
   blurRadius={3}
   >
       <Text style={[styles.house, styles.shadow]}>
           {props.house}
       </Text>
       <Text style={[styles.offer, styles.shadow]}>
           {props.offer}
       </Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 230,
        borderRadius: 10,
        marginBottom: 40,
        opacity: 0.9,
        backgroundColor: '#000',
        marginLeft: 3,
        marginTop: 20,
        marginRight: 20,
        padding: 12
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
        fontSize: 15
    },
    description: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
        fontSize: 12
    },
    shadow: {
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
        textShadowColor: '#000'
    },
    offer: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
        fontSize: 15
    }
})