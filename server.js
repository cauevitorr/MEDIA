import inquirer from 'inquirer'
import colors from 'colors'
import soma from './soma.js'

// console.log('Texto de exemplo'.rainbow)
inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Qual a primeira nota?'
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota?'
        }
    ]).then((answers) => {
        console.log(answers)
        const nota1 = Number(answers.p1)
        const nota2 = Number(answers.p2)
        
        const media = soma(nota1,nota2)
        if(media >= 7){
         console.log(`Você foi aprovado ${media}`.bgGreen)
        }else{
         console.log(`Vocé foi reporvado ${media}`.bgRed)
        }
    })
    .catch((err) => {
        console.error(err)
    })
