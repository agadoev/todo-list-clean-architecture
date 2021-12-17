import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InteractionService} from "./interaction.service";
import * as CoreServices from '../core/services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: CoreServices.InteractionService, useClass: InteractionService }
  ]
})
export class InfrastructureModule { }
