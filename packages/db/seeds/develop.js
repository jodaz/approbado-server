//@ts-nocheck
import { USER, APP_ENV  } from '@approbado/server/dist/config'
import { User, Trivia, Category, Level, Plan } from '@approbado/server/dist/models'
import bcrypt from 'bcrypt'

export async function seed(knex) {
    if (APP_ENV === 'development') {
        const encryptedPassword = await bcrypt.hash(USER.password, 10);

        // Create user test
        await User.query().insertGraph({
            names: 'Test User',
            user_name: 'test',
            password: encryptedPassword,
            is_registered: true,
            email: 'user@ejemplo.com',
            bio: 'Hola soy Matías y soy estudiante de segundo de Derecho en la Universidad de Chile. Me gusta el campo de Derecho político, así que... vamos a darle!',
            profile: {
                ocupation: 'Estudiante de derecho',
                summary: 'Hola soy Matías y soy estudiante de segundo de Derecho en la Universidad de Chile. Me gusta el campo de Derecho político, así que... vamos a darle!',
                linkedin: 'username',
                twitter: 'username'
            }
        })

        await Category.query().insert({
            name: 'Comercio',
        })

        await Level.query().insert({
            name: 'Ambiente',
        })

        const trivia = await Trivia.query().insert({
            name: 'Derecho comercial',
            category_id: 1,
            is_free: 1
        });

        trivia.$relatedQuery('subthemes').insert({
            'name': 'Subtema',
            'duration': 30
        })

        const plan = await Plan.query().insert({
            name: 'Approbado free',
            duration: 0,
            amount: 0
        });
    }
};
