import * as React from 'react';
import { View, Text, StyleSheet,Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Card, FAB} from 'react-native-paper'
import { color } from 'react-native-reanimated';
 function Home (props){

    const data = [
        {id:1, number:"Fsd 2611", type:"Car"},
        {id:1, number:"Fsd 2612" ,type:"Parado"},
        {id:1, number:"Fsd 2637", type:"Bike"},
     
        {id:1, number:"Fsd 2637", type:"Bike"}
    ]
    const renderList = ((item,ind)=>{
        return(

            <Card style={styles.mycard} key={ind} >
            <View style={styles.cardview}>
            <Image
            style={{width:60,height:50,borderRadius:30}}
            source={require('./a.jpg')}
            />
            <View style={{marginLeft:10}}>
        <Text style={styles.text}>{item.number}</Text>
        <Text style={styles.text}> {item.type}</Text>

            </View>
            </View>
        </Card>

        ) 
    })
    return(
        

        <View style={{flex:1}}>
            <FlatList
            data={data}
            renderItem = {({item})=>{
                return renderList(item)
            }}
            />

                <FAB onPress={()=>props.navigation.navigate('Create')}
                    style={styles.fab}
                    
                    small={false}
                    theme=
                        {{colors:{accent:"#006aff"}}}
                    
                    icon="plus"
                    
                />
        </View>
       

    )
}

export default Home;

const styles =StyleSheet.create({
    mycard:{
        margin:5,
        padding:5
    },
    cardview:{
        flexDirection:"row"
    },
    text:{
        fontSize:20,
        marginLeft:10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        
      },
  })
  