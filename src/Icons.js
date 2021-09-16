import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function IconsApp() {
  const [ menu, setMenu ] = useState([
    {
      id: "1",
      name: "Facebook",
      icon: "logo-facebook",
      color: "#3949A9"
    },
    {
      id: "2",
      name: "Linkedin",
      icon: "logo-linkedin",
      color: "#42A5F6"
    },
    {
      id: "3",
      name: "Youtube",
      icon: "logo-youtube",
      color: "#CC191E"
    },
    {
      id: "4",
      name: "Twitter",
      icon: "logo-twitter",
      color: "#55ADEF"
    },
    {
      id: "5",
      name: "Pinterest",
      icon: "logo-pinterest",
      color: "#BD2028"
    },
    {
      id: "6",
      name: "Instagram",
      icon: "logo-instagram",
      color: "#B62889"
    },
    {
      id: "7",
      name: "Reddit",
      icon: "logo-reddit",
      color: "#F14D01"
    },
    {
      id: "8",
      name: "Tumblr",
      icon: "logo-tumblr",
      color: "#36465D"
    },
    {
      id: "9",
      name: "Whatsapp",
      icon: "logo-whatsapp",
      color: "#13AF0B"
    },
    {
      id: "10",
      name: "Skype",
      icon: "logo-skype",
      color: "#00AFF0"
    },
    {
      id: "11",
      name: "Dribble",
      icon: "logo-dribbble",
      color: "#EA4C89"
    },
    {
      id: "12",
      name: "Slack",
      icon: "logo-slack",
      color: "#D81C57"
    },
    {
      id: "13",
      name: "Twitch",
      icon: "logo-twitch",
      color: "#60419F"
    },
    {
      id: "14",
      name: "VK",
      icon: "logo-vk",
      color: "#587EA3"
    },
    {
      id: "15",
      name: "Wordpress",
      icon: "logo-wordpress",
      color: "#217195"
    }
  ])
  return (
    <View style={styles.container}>
      <Text style={styles.title} >React Native Ionicons</Text>
      <FlatList
        numColumns={3}
        data={menu}
        renderItem={({item}) => {
          return (
            <View style={styles.listItem}>
               <Ionicons name={item.icon} size={60} color={item.color} /> 
               <Text style={styles.iconName}>{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    marginVertical: 40,
    color: "#03506f"
  },
  iconName: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "33%"
  }
});