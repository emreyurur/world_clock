import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert,Image } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("")
  console.log(name);
  console.log(lastName);
  
  const handleSavePress = () => {
    if (!name || !lastName || !email) {
      Alert.alert("Uyarı", "Lütfen tüm alanları doldurun.");
      return;
    }
    console.log("Kaydediliyor:", name, lastName, email);
    Alert.alert("Bilgiler Kaydedildi!");
  };

  return (
    <View style={styles.container}>
       <Image 
      style={styles.image}
      source={require('../assets/user.png')}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Name</Text>
      <TextInput
        placeholder='Enter your name'
        style={styles.textInputStyle}
        onChangeText={setName}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Last Name</Text>
      <TextInput
        placeholder='Enter your last name'
        style={styles.textInputStyle}
        onChangeText={setLastName}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>E-mail</Text>
      <TextInput
        placeholder='Enter your e-mail'
        style={styles.textInputStyle}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Password</Text>
      <TextInput
        placeholder='Enter your password'
        style={styles.textInputStyle}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Pressable onPress={handleSavePress} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 50,
    width: '80%',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center"
  },
  button: {
    borderWidth: 1,
    marginTop: 10,
    width: '40%',
    alignItems: "center",
    backgroundColor: "#7FC7D9",
    borderRadius: 6
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  image:{
    marginBottom:20,
    height:100,
    width:100
  }
});

export default SignUpScreen;
