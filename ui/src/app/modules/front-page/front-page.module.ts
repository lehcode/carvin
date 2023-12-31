import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageRoutingModule } from './frontpage-routing.module';
import { FrontPageComponent } from './front-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VINDecodeModule } from '~/app/modules/vin-decode/vin-decode.module';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    FlexLayoutModule,
    VINDecodeModule,
    MatToolbarModule
  ]
})
export class FrontPageModule {
}
