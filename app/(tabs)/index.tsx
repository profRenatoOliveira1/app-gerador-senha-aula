import { View } from '@/components/Themed';
import Slider from '@react-native-community/slider';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image 
          source={require('@/assets/images/logo.svg')} 
          style={{ width: 200, height: 200 }} 
      />
      <Text style={ styles.title }>16 caracteres</Text>
      <Slider 
        style={{ width: 200, height: 40 }}
        minimumValue={8}
        maximumValue={16}
        thumbTintColor='#392DE9'
        minimumTrackTintColor='#F49B36'
      />
      <TouchableOpacity
        style={ styles.button } 
        onPress={() => alert("botão pressionado")}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: "#392DE9",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 18
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20
  }
});
