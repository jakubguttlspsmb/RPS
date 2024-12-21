import { StyleSheet, View, Pressable, Text } from 'react-native';
import React from 'react';

type LabelChoice = 'Rock' | 'Paper' | 'Scissors';

type Props = {
  label: LabelChoice;
  onLabelChoice: (label: LabelChoice) => void;
  random: number; 
};

export default function Button({ label, onLabelChoice, random }: Props) {
  const game = () => {
    let userChoiceIndex = 0;

    if (label === "Rock") {
      userChoiceIndex = 0;
    } else if (label === "Paper") {
      userChoiceIndex = 1;
    } else if (label === "Scissors") {
      userChoiceIndex = 2;
    }

    const computerChoice = ["Rock", "Paper", "Scissors"][random];

    console.log(`User choice: ${label}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (userChoiceIndex === random) {
      console.log("It's a tie!");
    } else if (
      (userChoiceIndex === 0 && random === 1) || 
      (userChoiceIndex === 1 && random === 2) || 
      (userChoiceIndex === 2 && random === 0)
    ) {
      console.log('Computer wins!');
    } else {
      console.log('You win!');
    }
  };

  const handleGamePress = () => {
    onLabelChoice(label); 
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
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#a85b1b",
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
});
