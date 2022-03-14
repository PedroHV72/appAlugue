import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function House(props) {
 return (
   <View style={styles.container}>
       <View>
           <Image 
           source={props.cover}
           style={styles.cover}
           />
       </View>

       <View style={styles.content}>
           <Text style={styles.description}>Casa muito boa para se morar!</Text>
           <Text style={styles.price}>R$ 950,00</Text>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 10
    },
    cover: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    content: {
        width: '65%',
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        height: '100%'
    },
    description: {
        fontSize: 9,
        fontFamily: 'Montserrat_500Medium'
    },
    price: {
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
        paddingTop: 5
    }
})