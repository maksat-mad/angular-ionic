import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({ mode: 'ios' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
