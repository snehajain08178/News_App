import React, { Component } from 'react';
import {View,Text, StyleSheet, Image, ScrollView,Linking} from 'react-native';
import moment from 'moment';
import { BackArrow, Dots} from './icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

class NewsPage extends Component {

    state=  {
        author: this.props.route.params.author.slice(this.props.route.params.author.indexOf(" ")+1)
    }


    render(){
        return (
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.arrow}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomePage')}>
                        <BackArrow />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{color:'grey'}}>Author</Text>
                        <Text>{this.state.author}</Text>
                    </View>
                    <View>
                        <Dots />
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.section}>{this.props.route.params.section}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.props.route.params.title}</Text>
                    </View>
                    <Text style={styles.date}>{moment(this.props.route.params.date).format('dddd D MMMM YYYY')}</Text>
                    <Image style={styles.image} source={{uri: this.props.route.params.url}} />
                    <Text style={styles.abstract}>{this.props.route.params.abstract}</Text>
                    <Text style={styles.click}>Click Here To Read More</Text>
                    <Text style={styles.link}
                          onPress={() => Linking.openURL(this.props.route.params.linkUrl)}>{this.props.route.params.linkUrl}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 30
    },
    arrow: {
        paddingLeft: 30
    },
    sectionContainer: {
        paddingLeft: 30,
        paddingRight: 10
    },
    section:{
        backgroundColor: 'orange',
        color: 'white',
        fontSize: 19,
        paddingLeft: 10,
        textTransform: 'capitalize'
    },
    titleContainer: {
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    title: {
        fontSize: 30,
        fontFamily: 'serif'
    },
    date: {
        paddingBottom: 30,
        color: 'grey'
    },
    image: {
        width: 350,
        height: 180,
        borderRadius: 35,
    },
    abstract: {
        paddingTop: 30,
        fontSize: 20,
        paddingBottom: 30
    },
    click: {
        fontSize: 20
    },
    link: {
        color: 'blue',
        paddingBottom: 30,
        fontSize: 15
    }
})

export default NewsPage;