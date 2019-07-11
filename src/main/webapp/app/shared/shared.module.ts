import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShipmanagementSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ShipmanagementSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ShipmanagementSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShipmanagementSharedModule {
  static forRoot() {
    return {
      ngModule: ShipmanagementSharedModule
    };
  }
}
