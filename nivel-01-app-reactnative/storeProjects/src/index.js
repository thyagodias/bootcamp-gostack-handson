import React, { useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'
import api from './services/api'

export default function App () {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#204051' />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>📁 Projetos GoStack</Text>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <View key={project.id}>
              <Text style={styles.project}>{project.title}</Text>
              <Text style={styles.owner}>{project.owner}</Text>
            </View>
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#204051',
    padding: (10, 20)
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    color: '#cae8d5',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15
  },
  project: {
    color: '#84a9ac',
    fontSize: 20,
    fontWeight: '600'
  },
  owner: {
    color: '#3b6978',
    marginBottom: 15
  }
})
