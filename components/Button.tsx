import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';

type Props = {
  label: string;
  onLabelChoice: (label: string) => void;
};

export default function Button({ label, onLabelChoice  }: Props) {
  const game = () => {
  let random = Math.floor(Math.random() * 3) + 1;
   let choice = 0; 
   if (label == "Rock"){
    choice = 1; 
   };
   if (label == "Paper"){
    choice = 2;
   };
   if (label == "Scissors"){
    choice = 3; 
   };

   console.log(`User choice: ${label}`);
   console.log(`Computer choice: ${["Rock", "Paper", "Scissors"][random - 1]}`);

   if (choice === random) {
    console.log("It's a tie!");
  }
  else if (
    (choice === 1 && random === 2) || 
    (choice === 2 && random === 3) || 
    (choice === 3 && random === 1)    
  ) {
    console.log('Computer wins!');
  } else {
    console.log('You win!');
  }
   };

   const handleGamePress = () => {
    onLabelChoice(label); // Update parent state with the selected label
    game();
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={handleGamePress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 95,
    height: '27%',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 100,
    width: '100%',
    height: '150%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor:"black",
    borderWidth:1,
    backgroundColor:"#a85b1b",
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
});

