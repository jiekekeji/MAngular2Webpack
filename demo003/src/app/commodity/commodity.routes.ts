import {ContainerComponent} from './container/container.component';
import {ListComponent} from './list/list.component';


export const commodityRoutes = [
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
  {
    path: "comment",
    loadChildren: "../comment/comment.module#CommentModule"
  }

];
