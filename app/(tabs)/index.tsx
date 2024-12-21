import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import Button from '@/components/Button';

type LabelChoice = 'Paper' | 'Rock' | 'Scissors';

const images = {
  Paper: {
    G: require('@/assets/images/RUKY/PaperG.png'),
    P: require('@/assets/images/RUKY/PaperP.png'),
    R: require('@/assets/images/RUKY/PaperR.png'),
    Y: require('@/assets/images/RUKY/PaperY.png'),
  },
  Rock: {
    G: require('@/assets/images/RUKY/RockG.png'),
    P: require('@/assets/images/RUKY/RockP.png'),
    R: require('@/assets/images/RUKY/RockR.png'),
    Y: require('@/assets/images/RUKY/RockY.png'),
  },
  Scissors: {
    G: require('@/assets/images/RUKY/ScissorsG.png'),
    P: require('@/assets/images/RUKY/ScissorsP.png'),
    R: require('@/assets/images/RUKY/ScissorsR.png'),
    Y: require('@/assets/images/RUKY/ScissorsY.png'),
  },
};

export default function Index() {
  const [userData, setUserData] = useState<{ labelChoice: LabelChoice }>({ labelChoice: 'Paper' });
  const [pcData, setPcData] = useState<{ random: number }>({ random: Math.floor(Math.random() * 3) }); 
  const [gameResult, setGameResult] = useState<string>(''); 
  const handleLabelChoice = (label: LabelChoice) => {
    setUserData({ labelChoice: label });
    const randomChoiceIndex = Math.floor(Math.random() * 3); 
    setPcData({ random: randomChoiceIndex });

   
    game(label, randomChoiceIndex);
  };

 
  const choice = images[userData.labelChoice];
  const choice2 = images[['Rock', 'Paper', 'Scissors'][pcData.random] as LabelChoice]; 

  const game = (userChoice: LabelChoice, computerChoiceIndex: number) => {
    const userChoiceIndex = ['Rock', 'Paper', 'Scissors'].indexOf(userChoice);
    const computerChoice = ['Rock', 'Paper', 'Scissors'][computerChoiceIndex];

    if (userChoiceIndex === computerChoiceIndex) {
      setGameResult("It's a tie!");
    } else if (
      (userChoiceIndex === 0 && computerChoiceIndex === 1) || 
      (userChoiceIndex === 1 && computerChoiceIndex === 2) || 
      (userChoiceIndex === 2 && computerChoiceIndex === 0)
    ) {
      setGameResult('Computer wins!');
    } else {
      setGameResult('You win!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Selected label: {userData.labelChoice}</Text>
      <Image source={choice2.G} style={styles.image} />
      <Image source={choice.P} style={styles.image} />

      <View style={styles.footerContainer}>
        <Button label="Rock" onLabelChoice={handleLabelChoice} random={pcData.random} />
        <Button label="Paper" onLabelChoice={handleLabelChoice} random={pcData.random} />
        <Button label="Scissors" onLabelChoice={handleLabelChoice} random={pcData.random} />
      </View>

      <Text style={styles.resultText}>{gameResult}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e4736',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  footerContainer: {
    flexDirection: 'row',
  },
  image: {
    width: '50%',
    height: '25%',
  },
  labelText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
