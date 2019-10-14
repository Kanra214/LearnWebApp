pipeline{
    agent any
    tools {nodejs "MyNode"}
    environment {
        // secret = credential()

    }
    stages {
        // stage ('checkout dev branch'){
        //     steps{
        //         git branch: 'dev',
        //         credentialId: 'Github_Secret'
        //         url: 'https://github.com/Kanra214/LearnWebApp',
        //         checkout scm
        //     }
        // }
        stage('test') {
            
            parallel{
                stage('frontend test') {
                    steps {
                        sh '''
                        cd backend
                        npm install
                        npm test
                        '''
                    }
                }
                stage('backend test') {
                    steps {
                        sh '''
                        cd packet-money
                        npm i debug
                        npm i ms
                        npm install --verbose
                        npm link @angular/cli
                        ng test --configuration headless --watch false
                        '''
                    }
                }
            }
            
        }
        stage('merge to review branch') {
            steps{
                git branch: 'review',
                credentialId: 'Github_Secret'
                url: 'https://github.com/Kanra214/LearnWebApp',
                git merge dev
                git push
            }
        }
        stage('deploy in review containers') {
            agent docker
            environment {
                STAGE = 'review'
                FRONTEND_PORT = 4201
                BACKEND_PORT = 3001
                MONGODB_PORT = 27018
                MONGO_INITDB_ROOT_USERNAME = 'review-admin'
                MONGO_INITDB_ROOT_PASSWORD = credential(review_db_root_password)
            }
            steps {
                sh '''
                docker-compose -p review -d
                '''
            }

        }
        stage('deploy to master container') {
            sh '''
            echo "merge to master for production"
            '''
        }

    }
}