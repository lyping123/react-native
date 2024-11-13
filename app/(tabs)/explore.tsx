import { Image, StyleSheet, Platform,View,TextInput,Button,Alert } from 'react-native';
import React, { useState,useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const API_URL = 'http://localhost:3000';

export default function HomeScreen() {
  const [email,setEmail] =useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      Alert.alert(data.message);
    } catch (error) {
      Alert.alert('Registration Error', error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        setIsAuthenticated(true);
        Alert.alert('Login Successful');
      } else {
        Alert.alert('Login Failed', data.message);
      }
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://registration.synergycollege2u.com/fetch_tiotionfeeApi.php');
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
    <TextInput
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      style={styles.input}
      keyboardType="email-address"
    />
    <TextInput
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      style={styles.input}
      secureTextEntry
    />
    <Button title="Register" onPress={fetchData} />
    <Button title="Login" onPress={handleLogin} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});


