import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));


const Surveys = React.lazy(() => import('./views/SurveyManagement/Surveys'));
const AddSurvey = React.lazy(() => import('./views/SurveyManagement/AddSurvey'));
const UpdateSurvey = React.lazy(() => import('./views/SurveyManagement/UpdateSurvey'));
const ViewSurvey = React.lazy(() => import('./views/SurveyManagement/ViewSurvey'));

const AddQuestion = React.lazy(() => import('./views/Questions/AddQuestions'));
const ViewQuestion = React.lazy(() => import('./views/Questions/ViewQuestion'));
const UpdateQuestion = React.lazy(() => import('./views/Questions/UpdateQuestion'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },

  { path: '/survey-management/', exact: true, name: 'Survey Management', component: Surveys },
  { path: '/survey-management/view/:id', exact: true, name: 'Survey Management', component: ViewSurvey },
  { path: '/survey-management/new', exact: true, name: 'Add Survey', component: AddSurvey },
  { path: '/survey-management/update/:id', exact: true, name: 'Update Survey', component: UpdateSurvey},
  { path: '/survey-management/questions/new/:id', exact: true, name: 'Add Question', component: AddQuestion },
  { path: '/survey-management/questions/view/:id', exact: true, name: 'View Question', component: ViewQuestion },
  { path: '/survey-management/questions/update/:id', exact: true, name: 'Update Question', component: UpdateQuestion },

];

export default routes;
