import express from 'express'
import helmet from 'helmet'
import { APP_PORT, cors } from './config'
import routes from './routes'
import path from 'path'

// Set up server
const app = express()
app.use(helmet())
app.use(cors)
app.use(express.urlencoded({extended: false}));
app.use(express.json())
// Static routes
app.use('/static', express.static(path.resolve(__dirname, '../public')));

// Auth iframe
app.use('/auth', express.static(path.join(__dirname, '../../auth/build')));
app.get('/auth/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../auth/build', 'index.html'))
})

// API routes
app.use(routes);

app.listen(APP_PORT, () => {
    console.log(`Application started on port ${APP_PORT}!`);
});
