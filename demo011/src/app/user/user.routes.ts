import {ContainerComponent} from './container/container.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
export const userRoutes = [
  {
    path: "",
    redirectTo: 'container/register',
    pathMatch: 'full'
  },
  {
    path: "container",
    component: ContainerComponent,
    children: [
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
    ]
  },
];
