import { NgModule } from '@angular/core';

import { SeleniumSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SeleniumSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SeleniumSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SeleniumSharedCommonModule {}
