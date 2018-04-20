import { Component, OnInit } from '@angular/core';
import { Name } from "../model/name.model";
import { BotConfigRespository } from "../model/bot-config-repository.model"
import { BotConfig } from "../model/bot-config.model"
import { BotConfigService } from "../service/bot-config.service"
import { ModelService } from "../../model/model.service";

@Component({
  selector: 'start-config',
  templateUrl: './start-config.component.html',
  styleUrls: ['./start-config.component.scss']
})
export class StartConfigComponent implements OnInit {

  public name: Name;
  public botDetails : BotConfigRespository;

  constructor(private botConfigService : BotConfigService,
  private modelService : ModelService ) { }

  ngOnInit() {

    console.log(this.modelService.botConfigRespository);

    if (this.modelService.currentBot) {
      this.name = {
        botName: '',
        botDesc: ''
      };
    } else {
      this.name = {
        botName: this.modelService.currentBot.value.name.botName,
        botDesc: this.modelService.currentBot.value.name.botDesc
      };
    }

  }

  startBotCreation() {
    console.log(this.name);
    let botConfigRepo: BotConfigRespository;
    let value: BotConfig;
    value = { name: this.name };
    botConfigRepo = {
      botId: '2',
      stepConfig: 'name',
      value: value,
      status: 'N'
    };

    this.botConfigService.startBotCreation(botConfigRepo).subscribe(
      data => {
        this.botDetails = data;
      },
      error => console.log("ERROR ::" + error)
    );

  }

}
