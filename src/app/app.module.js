"use strict";var __decorate=this&&this.__decorate||function(e,o,n,r){var t,p=arguments.length,i=p<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,n,r);else for(var _=e.length-1;0<=_;_--)(t=e[_])&&(i=(p<3?t(i):3<p?t(o,n,i):t(o,n))||i);return 3<p&&i&&Object.defineProperty(o,n,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),app_routing_1=require("./app.routing"),app_component_1=require("./app.component"),login_component_1=require("./login/login.component"),signin_component_1=require("./signin/signin.component"),main_component_1=require("./main/main.component"),AppModule=function(){function e(){}return e=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,login_component_1.LoginComponent,signin_component_1.SigninComponent,main_component_1.MainComponent],imports:[platform_browser_1.BrowserModule,app_routing_1.routing],providers:[],bootstrap:[app_component_1.AppComponent]})],e)}();exports.AppModule=AppModule;