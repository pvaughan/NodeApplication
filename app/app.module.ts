import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {SkillLevelComponent} from './components/skilllevel/skilllevel.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,SkillLevelComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
