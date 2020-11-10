import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'reporting', loadChildren: './reporting/reporting.module#ReportingPageModule' },
  { path: 'project', loadChildren: './project/project.module#ProjectPageModule' },
  { path: 'workload', loadChildren: './workload/workload.module#WorkloadPageModule' },
  { path: 'project-data', loadChildren: './project-data/project-data.module#ProjectDataPageModule' },
  { path: 'workload-data', loadChildren: './workload-data/workload-data.module#WorkloadDataPageModule' },
  { path: 'team', loadChildren: './team/team.module#TeamPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
