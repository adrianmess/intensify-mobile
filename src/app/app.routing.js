"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var router_1=require("@angular/router"),login_component_1=require("./login/login.component"),signin_component_1=require("./signin/signin.component"),appRoutes=[{path:"",component:login_component_1.LoginComponent},{path:"sign-in",component:signin_component_1.SigninComponent},{path:"login",component:login_component_1.LoginComponent}];exports.routing=router_1.RouterModule.forRoot(appRoutes);