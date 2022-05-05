import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppBody } from './body/body.component';
import { AppHeader } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  exports: [AppHeader, AppBody],
  declarations: [AppHeader, AppBody],
})
export class ComponentsModule {}
