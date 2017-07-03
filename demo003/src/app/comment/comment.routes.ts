import {ContainerComponent} from './container/container.component';
import {ListComponent} from './list/list.component';

export const commentRoutes = [
  {
    path: "",
    redirectTo: 'container/list',
    pathMatch: 'full'
  },
  {
    path: "container",
    component: ContainerComponent,
    children: [
      {
        path: "list",
        component: ListComponent
      },
    ]
  },
];
