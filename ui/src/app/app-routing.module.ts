import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PageNotFoundComponent } from '~/app/modules/layout/components/page-not-found/page-not-found.component';
import { environment } from '~/environments/environment';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((mod) => mod.AdminModule),
    data: {
      showSideBar: true
    }
  },
  {
    path: '',
    loadChildren: () => import('./modules/front-page/front-page.module').then((mod) => mod.FrontPageModule),
    data: {
      showGuestNav: true,
      // showHeader: true,
      showFooter: true,
    }
  },
  {
    path: 'faq', loadChildren: () => import('./modules/faq/faq.module').then((mod) => mod.FAQModule), data: {
      // showGuestNav: true,
      showHeader: true,
      showFooter: true,
    }
  },
  // {path: 'vin-report', loadChildren: () => import('./modules/vin-report/vin-report.module').then((mod) => mod.VINReportModule)},
  {path: '**', component: PageNotFoundComponent}
];

const routerOpts = {
  initialNavigation: 'enabled'
};

if (!environment.production) {
  Object.assign(routerOpts, {enableTracing: true});
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOpts as ExtraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
