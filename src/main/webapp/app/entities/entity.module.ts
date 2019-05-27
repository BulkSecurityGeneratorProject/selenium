import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#SeleniumRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#SeleniumCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#SeleniumLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#SeleniumDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#SeleniumTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#SeleniumEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#SeleniumJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#SeleniumJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeleniumEntityModule {}
