import React, { useState, useEffect, Fragment } from 'react'
import api from './services/api'

import './App.css'
import perfilImage from './assets/perfil.jpg'

import Header from './components/Header'

function App () {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  function handleAddProject () {
    setProjects([...projects, `Novo projeto ${new Date()}`])
  }

  return (
    <Fragment>
      <Header title='My Projects' />

      <img src={perfilImage} width={100} />
      <ul>
        {projects.map(project => (
          <li key={project.id} className='project'>
            📁 {project.title}
          </li>
        ))}
      </ul>

      <button type='button' onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </Fragment>
  )
}

export default App
