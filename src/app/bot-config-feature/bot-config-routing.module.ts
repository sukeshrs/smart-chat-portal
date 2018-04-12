import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotConfigComponent } from './bot-config/bot-config.component';
import { DisplayBotComponent } from './display-bot/display-bot.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicCustomNameComponent } from './topic-custom-name/topic-custom-name.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { StartConfigComponent } from './start-config/start-config.component';
import { BotConfigDashboardComponent } from './bot-config-dashboard/bot-config-dashboard.component';

const botConfigRoutes: Routes = [
  {
    path: 'configure',
    component: BotConfigComponent,
    children: [
      {path: 'dashboard', component: BotConfigDashboardComponent},
      {path: 'create-bot', component: StartConfigComponent},
      {path: 'choose-topics', component:  TopicCustomNameComponent},
      {path: 'topic-details', component:  TopicDetailsComponent}
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
