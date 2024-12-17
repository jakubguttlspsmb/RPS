import { StyleSheet, View, Pressable, Text } from 'react-native';
/* @tutinfo Import FontAwesome. */import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
};

export default function Button({ label, theme }: Props) {

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.'+ label)}>
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
    backgroundColor:"#663300",
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
});

