import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotConfigComponent } from './bot-config/bot-config.component';
import { DisplayBotComponent } from './display-bot/display-bot.component';
import { ConfigureComponent } from './configure/configure.component';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { BotConfigRoutingModule } from './bot-config-routing.module';
import { DisplayTopicsComponent } from './display-topics/display-topics.component';
import { CreateBotComponent } from './create-bot/create-bot.component';

@NgModule({
  imports: [
    SharedFeatureModule,
    BotConfigRoutingModule
  ],
  declarations: [
    BotConfigComponent,
    DisplayBotComponent,
    ConfigureComponent,
    DisplayTopicsComponent,
    CreateBotComponent
  ]
})
export class BotConfigFeatureModule { }
