import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SeleniumSharedLibsModule, SeleniumSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SeleniumSharedLibsModule, SeleniumSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SeleniumSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeleniumSharedModule {
  static forRoot() {
    return {
      ngModule: SeleniumSharedModule
    };
  }
}
