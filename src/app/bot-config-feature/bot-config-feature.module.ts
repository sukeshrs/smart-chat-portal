import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotConfigComponent } from './bot-config/bot-config.component';
import { DisplayBotComponent } from './display-bot/display-bot.component';
import { ConfigureComponent } from './configure/configure.component';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';

@NgModule({
  imports: [
    SharedFeatureModule
  ],
  declarations: [BotConfigComponent, DisplayBotComponent, ConfigureComponent]
})
export class BotConfigFeatureModule { }
