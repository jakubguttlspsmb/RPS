import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 
import { Image } from 'expo-image';
import Button from '@/components/Button';

const HandPictures = require('@/assets/images/RUKY/PaperG.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={HandPictures} style={styles.image} />
      <Image source={HandPictures} style={styles.image}/>
      <View style={styles.footerContainer}>
        <Button  label="Rock" />
        <Button  label="Paper" />
        <Button  label="Scissors" />
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
