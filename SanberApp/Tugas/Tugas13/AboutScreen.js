import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class App extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Tentang Saya</Text>
                <Image source={require("./images/photo.png")} style={styles.photo}/>
                <Text style={styles.name}>Rizky Tri Sulistyo</Text>
                <Text style={styles.status}>React Native Developer</Text>
                <View style={styles.box}>
                    <Text style={{fontSize: 16}}>Portofolio</Text>
                    <View style={styles.separator}/>
                    <View style={styles.itemH}>
                        <View style={styles.itemHV}>
                            <Image source={require("./images/gitlab.png")} style={styles.logo}/>
                            <Text style={styles.logoText}>@awakutu</Text>
                        </View>
                        <View style={styles.itemHV}>
                            <Image source={require("./images/github.png")} style={styles.logo}/>
                            <Text style={styles.logoText}>@awakutu</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 16}}>Hubungi Saya</Text>
                    <View style={styles.separator}/>
                    <View style={styles.itemV}>
                        <View style={styles.itemVH}>
                            <Image source={require("./images/facebook.png")} style={styles.logo}/>
                            <Text style={styles.logoText}>-</Text>
                        </View>
                        <View style={styles.itemVH}>
                            <Image source={require("./images/instagram.png")} style={styles.logo}/>
                            <Text style={styles.logoText}>@rizkytrisulistyo</Text>
                        </View>
                        <View style={styles.itemVH}>
                            <Image source={require("./images/twitter.png")} style={styles.logo}/>
                            <Text style={styles.logoText}>@awakutu</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const colors = {
    lightBlue: "#3EC6FF",
    darkBlue: "#003366",
    grayBackground: "#EFEFEF"
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        color: colors.darkBlue, 
        fontSize: 30, 
        fontWeight: 'bold',
        marginTop: 44,
        marginBottom: 12
    },
    photo: {
        width: 180,
        height: 180,
        borderRadius: 100,
        resizeMode: "cover"
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.darkBlue,
        marginTop: 10,
        marginBottom: 4
    },
    status: {
        fontSize: 16,
        color: colors.lightBlue,
        marginBottom: 12
    },
    box: {
        width: "90%",
        padding: 8,
        borderRadius: 16,
        backgroundColor: colors.grayBackground,
        alignItems: "flex-start",
        marginBottom: 12
    },
    separator: {
        width: "100%",
        height: 0,
        borderWidth: 0.5,
        borderColor: colors.darkBlue,
        marginVertical: 4
    },
    itemH: {
        marginVertical: 10,
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-around'
    },
    itemHV: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 35,
        height: 35,
    },
    logoText: {
        fontSize: 14,
        color: colors.darkBlue,
        fontWeight: "bold",
        marginTop: 6,
        marginHorizontal: 14
    },
    itemV: {
        width: "100%",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemVH: {
        width: 130,
        flexDirection: 'row',
        margin: 10
    }
})