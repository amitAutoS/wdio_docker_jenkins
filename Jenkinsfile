pipeline {
  agent any
    
  tools {nodejs "node143"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/amitAutoS/wdio_docker_jenkins.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    
    stage('Test') {
      steps {
         sh 'npm run test'
      }
    }      
  }

  post('Publish Report') {
          always {
            script {
              allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
              ])
            }
            
          
        }
    }
}