import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BotConfigComponent } from './bot-config/bot-config.component';
import { DisplayBotComponent } from './display-bot/display-bot.component';
import { DisplayTopicsComponent } from './display-topics/display-topics.component';
import { ConfigureComponent } from './configure/configure.component';

const botConfigRoutes: Routes = [
  {
    path: 'configure',
    component: BotConfigComponent,
    children: [
      {path: 'create-bot', component: ConfigureComponent},
      {path: 'topics', component: DisplayTopicsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(botConfigRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BotConfigRoutingModule { }
