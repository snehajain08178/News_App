import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {Dots} from './icons'
import HomepageFlatlist from './homepageFlatlist';

class HomePage extends Component {

    state = {
        actualData: [],
        data:[],
        url:[],
        title:[],
        loading: true,
        imageloading: true
      } 
     
     newsApiFetching = () => {
       const url = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=6BMWibm9bPEVIG3f35hgmG42CGcadM1k';
       fetch(url).then(response => response.json()).then(dailyData => {
         this.setState({
           actualData: dailyData.results,
           loading: false
         })
        //  this.state.actualData.map(item => {
        //     this.setState({
        //         url: [...this.state.url,item.multimedia[0].url],
        //         title: [...this.state.title,item.title]
        //     })
        // })
        // this.setState({
        //     data: {title: this.state.title, url: this.state.url}
        // })
        // console.log('url',this.state.url)
        // console.log('title',this.state.title)
        // console.log('data',this.state.data)
        console.log(JSON.stringify(this.state.actualData,null,6))
         }  )
     }
     

     componentDidMount(){
        this.newsApiFetching()
     }

    render(){
        return (
            <View style={{flex:1}}>
              <View style={{flex:1.5}}>
        <View style={styles.dots}>
            <Dots /> 
        </View>
        <Text style={styles.news}>News</Text>
        <View style={styles.sideLine}>
        </View>
        <Text style={styles.latest}>Latest</Text>
        </View>
        <View style={{flex:2.5}}>
        {this.state.loading ? (
        <ActivityIndicator size='large' style={{justifyContent:'center',alignItems:'center',flex:1}}/>): (
          <FlatList 
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          numColumns={2}
          data={this.state.actualData}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item,index}) => (
            <View>
              <View style={styles.imageTextContainer}>
                <TouchableOpacity style={{width:175}}
                                  onPress={() => this.props.navigation.navigate('NewsPage',{
                                      section: item.section,
                                      title: item.title,
                                      date: item.published_date,
                                      url: item.multimedia[0].url,
                                      abstract: item.abstract,
                                       author: item.byline,
                                      linkUrl: item.url
                                  })}>
                  <View>
                  <Image 
                    style={styles.image}
                    source={{uri : item.multimedia[0].url}} 
                   />
                  </View>
                   <Text 
                      style={styles.newsTitle}
                      numberOfLines={2}>{item.title}</Text>
                </TouchableOpacity>
              </View>
              </View>
          )}
        />
        )}
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    dots: {
        paddingTop: 20,
        alignItems: 'flex-end',
        paddingRight: 20
    },
    news: {
      fontSize: 45,
      paddingTop: 60,
      paddingHorizontal: 30,
      paddingBottom: 20,
      fontFamily: 'serif'
    },
    sideLine: {
      borderColor: 'orange',
      borderWidth: 2,
      marginLeft: 60,
      marginRight: 15
    },
    latest: {
      fontSize: 22,
      fontWeight: 'bold',
      paddingTop: 30,
      paddingHorizontal: 35,
      paddingBottom: 30
    },
    flatList: {
      alignSelf:'center'
    },
    imageTextContainer: {
      padding: 8,
      paddingBottom: 20
    },
    image: {
      width: 180,
      height: 170,
      borderRadius: 30,
    },
    newsTitle: {
      paddingTop: 5
    }
  });
  

export default HomePage;