import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BotConfigComponent } from './bot-config/bot-config.component';
import { DisplayBotComponent } from './display-bot/display-bot.component';
import { DisplayTopicsComponent } from './display-topics/display-topics.component';
import { CreateBotComponent } from './create-bot/create-bot.component';

const botConfigRoutes: Routes = [
  {
    path: 'configure',
    component: BotConfigComponent,
    children: [
      {path: 'create-bot', component: CreateBotComponent},
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
