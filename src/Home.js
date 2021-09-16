import React, { useState } from 'react';
import { Text, View, Button, ImageBackground, StyleSheet, Image } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'

export default function HomeApp({ navigation }) {
    const image = { uri: 'https://www.gtitravel.com/wp-content/uploads/2017/06/Do-Travel-Agents-get-free-trips-600x400.jpg' }
    const [gallery, setgallery] = useState([
        { image: { uri: 'https://i.pinimg.com/236x/6e/4b/25/6e4b2525373316f6cf16d8b612c5906a.jpg' } },
        { image: { uri: 'http://images6.fanpop.com/image/photos/34200000/DSquared2-Pre-Fall-Winter-2012-2013-Women-s-Clothing-barbara-palvin-model-34246112-333-500.jpg' } },
        { image: { uri: 'https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/landing-pages/pages/women/US/April-2021/w_mobile-hero-6_2x.jpg' } },
        { image: { uri: 'https://www.bedyitem.com/wp-content/uploads/2016/03/business-casual-fashion-for-women-2016-4.jpg' } },
        { image: { uri: 'https://i.pinimg.com/236x/f6/46/8d/f6468d1d0bb282073b9b21256490e5c0.jpg' } },
        { image: { uri: 'https://i.pinimg.com/236x/b7/a8/48/b7a8484244d9ab29dcee3c02b66007a8.jpg' } },
        { image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaHdH2e_Klit-obNw7ehMXlt8-3cSV8xn6hkfO3Po6Ev_adDmjqDFAzY9nFk3TJtCzss&usqp=CAU' } },
        { image: { uri: 'https://cdn.cliqueinc.com/posts/244073/model-outfits-244073-1512582999453-image.700x0c.jpg' } },
    ]);
    return (
        <View style={{ backgroundColor: '#F7F7F7' }}>
            <ScrollView>
                <View style={{ width: '100%', height: 70, display: 'flex', flexDirection: 'row', padding: 10 }}>
                    <View style={styles.containicon}>
                        <Icon
                            raised
                            name='female-outline'
                            type='ionicon'
                            color='#FFC0CB'
                            size={25}
                        />
                        <Text style={styles.texticon}>Damas</Text>
                    </View>
                    <View style={styles.containicon}>
                        <Icon
                            raised
                            name='male-outline'
                            type='ionicon'
                            color='#0000FF'
                            size={25}
                        />
                        <Text style={styles.texticon}>Caballeros</Text>
                    </View>
                    <View style={styles.containicon}>
                        <Icon
                            raised
                            name='fast-food-outline'
                            type='ionicon'
                            color='#0fbff2'
                            size={25}
                        />
                        <Text style={styles.texticon}>Bebe</Text>
                    </View>
                    <View style={styles.containicon}>
                        <Icon
                            raised
                            name='man-outline'
                            type='ionicon'
                            color='#FFA500'
                            size={25}
                        />
                        <Text style={styles.texticon}>Adulto</Text>
                    </View>
                    <View style={styles.containicon}>
                        <Icon
                            raised
                            name='shirt-outline'
                            type='ionicon'
                            color='#00FF00'
                            size={25}
                        />
                        <Text style={styles.texticon}>Temporada</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 36, paddingLeft: 16 }}>
                    <View style={styles.container}>
                        <ImageBackground source={{ uri: 'https://i.guim.co.uk/img/media/d968c6cd723759963488dd03b9da59b936c2973b/0_40_3300_1979/master/3300.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=66a678758096188a32d050ba26d89bea' }} style={styles.image}>
                            <Text style={styles.text}>Estilo de Invierno</Text>
                            <Text style={styles.text1}>Gran oferta de ropa de invierno</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.container}>
                        <ImageBackground source={{ uri: 'https://www.donnakaran.com/images/donnakaran/en_us/local/localgraphics/navigation/nav_sp21_women.jpg' }} style={styles.image}>
                            <Text style={styles.text}>Estilo de Invierno</Text>
                            <Text style={styles.text1}>Gran oferta de ropa de invierno</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{  paddingLeft: 16 }}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Tranding</Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={gallery}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.containerHorizon}>
                                    {/* <TouchableOpacity>
                                        <Image source={item.image} style={{ width: 150, height: 250, borderRadius: 5 }} />
                                    </TouchableOpacity> */}
                                    <ImageBackground source={item.image} style={styles.image}>
                                <Text style={styles.text}>Estilo de Invierno</Text>
                            </ImageBackground>
                                </View>

                            )
                        }}>
                    </FlatList>
                </View>
                <View style={{ padding: 16 }}>
                    <FontAwesome.Button name="facebook" backgroundColor="#3b5998" >
                        Sign in with Facebook
</FontAwesome.Button>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    DarkOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 270,
        backgroundColor: '#000000',
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    searchButton: {
        marginTop: 16,
        backgroundColor: '#fff',
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: '90%'
    },
    searchContainer: {
        paddingTop: 100,
        paddingLeft: 16
    },
    UserGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    userText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white'
    },
    container: {
        flex: 1,
        flexDirection: "column",
        height: 200,
        paddingBottom:20,
        paddingRight:10
    },
    containerHorizon: {
        flex: 1,
        flexDirection: "column",
        height: 300,
        paddingLeft:10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "left",
        textShadowColor: '#000',
        paddingLeft:10,
        paddingRight:10
    },
    text1: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft:10,
        paddingRight:10
    },
    containicon:{
      paddingLeft:6   
    },
    texticon:{
        fontSize: 10,
        textAlign:'center', 
        color:'#666'
    }
})
