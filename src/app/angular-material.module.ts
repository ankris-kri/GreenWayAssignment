import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule,
    MatBottomSheetModule
  ]
})
export class AngularMaterialModule { }
