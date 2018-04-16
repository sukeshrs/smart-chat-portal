import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BotConfigComponent } from './bot-config/bot-config.component';
import { DisplayBotComponent } from './display-bot/display-bot.component';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { BotConfigRoutingModule } from './bot-config-routing.module';
import { TopicListComponent } from './topic-list/topic-list.component';
import { StartConfigComponent } from './start-config/start-config.component';
import { TopicCustomNameComponent } from './topic-custom-name/topic-custom-name.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { BotConfigDashboardComponent } from './bot-config-dashboard/bot-config-dashboard.component';
import { BotConfigService } from './service/bot-config.service';

@NgModule({
  imports: [
    SharedFeatureModule,
    BotConfigRoutingModule,
    FormsModule
  ],
  declarations: [
    BotConfigComponent,
    DisplayBotComponent,
    TopicListComponent,
    StartConfigComponent,
    TopicCustomNameComponent,
    TopicDetailsComponent,
    BotConfigDashboardComponent
  ],
  providers: [
    BotConfigService
  ],
})
export class BotConfigFeatureModule { }
