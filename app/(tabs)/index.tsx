import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image } from 'expo-image';
import Button from '@/components/Button';


export default function Index() {
  const [userData, setUserData] = useState({ labelChoice: '' });

  const handleLabelChoice = (label: string) => {
    setUserData({ labelChoice: label });
  };

  const Paper = {
    G: require('@/assets/images/RUKY/PaperG.png'),
    P: require('@/assets/images/RUKY/PaperP.png'), 
    R: require('@/assets/images/RUKY/PaperR.png'), 
    Y: require('@/assets/images/RUKY/PaperY.png'), 
  };
  const Rock = {
    G: require('@/assets/images/RUKY/RockG.png'),
    P: require('@/assets/images/RUKY/RockP.png'), 
    R: require('@/assets/images/RUKY/RockR.png'), 
    Y: require('@/assets/images/RUKY/RockY.png'), 
  };
  const Scissors = {
    G: require('@/assets/images/RUKY/ScissorsG.png'),
    P: require('@/assets/images/RUKY/ScissorsP.png'), 
    R: require('@/assets/images/RUKY/ScissorsR.png'), 
    Y: require('@/assets/images/RUKY/ScissorsY.png'), 
  };
let Choice = Paper
  return (
    <View style={styles.container}>
      <Text>Selected label: {userData.labelChoice}</Text> {/* Accessing userData here */}
      <Image source={Choice.G} style={styles.image} />
      <Image source={Paper.G} style={styles.image}/>
      <View style={styles.footerContainer}>
        <Button  label="Rock" onLabelChoice={handleLabelChoice}/>
        <Button  label="Paper" onLabelChoice={handleLabelChoice}/>
        <Button  label="Scissors" onLabelChoice={handleLabelChoice}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e4736',
    alignItems: 'center',
    justifyContent:"space-between",
    height:'100%' ,
  },

  footerContainer: {
    flexDirection: "row",
  },
  image: {
    width: '50%',
    height: '25%',
  },
});
