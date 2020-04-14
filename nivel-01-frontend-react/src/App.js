import React, { useState, useEffect, Fragment } from 'react'
import api from './services/api'

import './App.css'

import Header from './components/Header'

function App () {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject () {
    const response = await api.post('projects', {
      title: `teste API`,
      owner: 'react'
    })
    console.log(response.data)

    setProjects([...projects, response.data])
  }

  return (
    <Fragment>
      <Header title='Projects' />

      <ul>
        {projects.map(project => (
          <li key={project.id} className='project'>
            📁 <b>{project.title}</b>
            <p>
              <i>{project.owner}</i>
            </p>
          </li>
        ))}
      </ul>

      <button type='button' className='ml-1' onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </Fragment>
  )
}

export default App
