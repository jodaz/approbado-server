import { Route } from 'react-router-dom';
import Configurations from './configurations/Configurations';
import LevelsCreate from './configurations/LevelsCreate'
import CategoryCreate from './configurations/CategoryCreate'
import CategoryEdit from './configurations/CategoryEdit'
import LevelEdit from './configurations/LevelEdit'
import Profile from './profile'
import { RouteWithoutLayout } from 'ra-core';
import Memberships from './memberships/Memberships';
import PlanCreate from './memberships/PlanCreate';
import PlanEdit from './memberships/PlanEdit';
import ResetPassword from './layouts/ResetPassword';
import ErrorLayout from '@approbado/lib/layouts/Error'
import UpdatePassword from './layouts/UpdatePassword';
import SubthemeCreate from './subthemes/SubthemeCreate'
import SubthemeShow from './subthemes/SubthemeShow';

export default [
    <Route exact path="/configurations" render={() => <Configurations />} />,
    <Route exact path="/memberships" render={() => <Memberships />} />,
    <Route
        path="/memberships/plans/create"
        render={() => <PlanCreate />}
    />,
    <Route
        path="/memberships/plans/:id"
        render={() => <PlanEdit />}
    />,
    <Route
        path="/configurations/levels/create"
        render={() => <LevelsCreate />}
    />,
    <Route
        path="/configurations/categories/create"
        render={() => <CategoryCreate />}
    />,
    <Route
        path="/configurations/categories/:id"
        render={() => <CategoryEdit />}
    />,
    <Route
        path="/configurations/levels/:id"
        render={() => <LevelEdit />}
    />,
    <Route
        path="/profile"
        render={() => <Profile />}
    />,
    <Route
        path="/trivias/:trivia_id/subthemes/create"
        render={() => <SubthemeCreate />}
    />,
    <Route
        path="/trivias/:trivia_id/subthemes/:subtheme_id/show"
        render={() => <SubthemeShow />}
    />,
    <RouteWithoutLayout
        path="/reset-password"
        render={() => <ResetPassword />}
    />,
    <RouteWithoutLayout
        path="/error"
        render={() => <ErrorLayout />}
    />,
    <RouteWithoutLayout
        path="/update-password"
        render={() => <UpdatePassword />}
    />,
];

