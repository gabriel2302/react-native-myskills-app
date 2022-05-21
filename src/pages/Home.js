import React, { useState, useEffect } from 'react';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddNewSkill() {
    setSkills([...skills, newSkill]);
  }

  useEffect(() => {
    console.log('useEffectExecutado');
    setNewSkill('');
  }, [skills]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Olá senhor</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    backgroundColor: '#1f1e25',
    color: '#fff',
    marginTop: 30,
    fontSize: 18,
    padding: 10,
    borderRadius: 7,
  },
});
