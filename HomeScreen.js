import React from 'react'
import {View,Text} from 'react-native'
 
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center',flex:1, alignItems:'center'}}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}