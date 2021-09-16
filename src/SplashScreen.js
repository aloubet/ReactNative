import react, { Component}  from 'react';
import {View, StatusBar, Image } from 'react-native';

export default class SplashScreen extends Component{

    goToScreen(routeName){
        this.props.navigation.navigate(routeName);
    }

    componentDidMount(){
        setTimeout(() => {
            this.goToScreen('Login')
        }, 5000, this);
    }

    render(){
        return(
            <View>
                <StatusBar>
                    <Image></Image>
                </StatusBar>
            </View>
        )
    
    }
}