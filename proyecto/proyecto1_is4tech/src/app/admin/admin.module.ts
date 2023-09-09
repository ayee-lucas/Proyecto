import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './components/dogs/dogs.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { ParamsComponent } from '../params/params.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import {DialogComponent} from "./components/dialog/dialog.component";

@NgModule({
  declarations: [DogsComponent, ParamsComponent, FormsComponent, DialogComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule, MatDatepickerModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule, MatFormFieldModule ]
})
export class AdminModule {}
