import { Component, OnInit } from '@angular/core';
import { BotConfigService } from "../service/bot-config.service";
import { BotConfigRespository } from "../model/bot-config-repository.model";

@Component({
  selector: 'bot-config-dashboard',
  templateUrl: './bot-config-dashboard.component.html',
  styleUrls: ['./bot-config-dashboard.component.scss']
})
export class BotConfigDashboardComponent implements OnInit {

  public botConfigList : BotConfigRespository[];
  constructor(private botConfigService : BotConfigService) { }

  ngOnInit() {
      this.getBotConfigList();
  }
  getBotConfigList(){
    this.botConfigService.getBotConfigList().subscribe(
      data => {
        this.botConfigList = data;
        console.log(this.botConfigList);
      },
      error => console.log("ERROR ::" + error)
    );

  }

}
