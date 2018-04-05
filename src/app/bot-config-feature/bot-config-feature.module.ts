import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotConfigComponent } from './bot-config/bot-config.component';
import { DisplayBotComponent } from './display-bot/display-bot.component';
import { ConfigureComponent } from './configure/configure.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BotConfigComponent, DisplayBotComponent, ConfigureComponent]
})
export class BotConfigFeatureModule { }
