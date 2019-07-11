import { NgModule } from '@angular/core';

import { ShipmanagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ShipmanagementSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ShipmanagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ShipmanagementSharedCommonModule {}
