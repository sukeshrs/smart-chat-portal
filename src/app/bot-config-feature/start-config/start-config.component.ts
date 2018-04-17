import { Component, OnInit } from '@angular/core';
import { Name } from "../model/name.model";
import { BotConfigRespository } from "../model/bot-config-repository.model"
import { BotConfig } from "../model/bot-config.model"
import { BotConfigService } from "../service/bot-config.service"
@Component({
  selector: 'start-config',
  templateUrl: './start-config.component.html',
  styleUrls: ['./start-config.component.scss']
})
export class StartConfigComponent implements OnInit {

  public name: Name;
  public botDetails : BotConfigRespository;

  constructor(private botConfigService : BotConfigService ) { }

  ngOnInit() {
    if (!this.name) {
      this.name = {
        botName: '',
        botDesc: ''
      };
    }
  }

  startBotCreation() {
    console.log(this.name);
    let botCongigRepo: BotConfigRespository;
    let value: BotConfig;
    value = { name: this.name };
    botCongigRepo = {
      botId: '2',
      stepConfig: 'name',
      value: value,
      status: 'N'
    };

    this.botConfigService.startBotCreation(botCongigRepo).subscribe(
      data => {
        this.botDetails = data;
      },
      error => console.log("ERROR ::" + error)
    );

  }

}
