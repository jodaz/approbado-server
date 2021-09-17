import { Admin, Resource } from 'react-admin'
import users from './users'
import { dataProvider, authProvider, browserHistory } from './providers'
import Layout from './layouts'
import customRoutes from './routes'
import Dashboard from './dashboard'

const App = () => (
	<Admin
		dashboard={Dashboard}
		customRoutes={customRoutes}
		history={browserHistory}
		layout={Layout}
		dataProvider={dataProvider}
		loginPage={false}
		authProvider={authProvider}
	>
		<Resource {...users} />
		<Resource name="configurations/levels" />
		<Resource name="trivia-settings" />
		<Resource name="configurations/categories" />
	</Admin>
)

export default App;