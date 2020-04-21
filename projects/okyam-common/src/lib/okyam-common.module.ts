import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SearchComponent } from './search/search.component';

registerLocaleData(en);

@NgModule({
  declarations: [SearchComponent],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ],
  exports: [NgZorroAntdModule, SearchComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class OkyamCommonModule { }
