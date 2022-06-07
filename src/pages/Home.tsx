import React, { useState } from 'react';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Keyboard,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


interface ISkill {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<ISkill[]>([]);

  function handleAddNewSkill() {
    if (newSkill === '') {
      return;
    }
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setSkills([...skills, data]);
    setNewSkill('');
    Keyboard.dismiss();
  }

  function handleRemoveSkill(id: string) {
    setSkills(skills.filter(skill => skill.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Olá senhor</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button onPress={handleAddNewSkill}  title="Adicionar"/>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />}
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
