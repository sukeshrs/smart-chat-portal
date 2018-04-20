import { Component, OnInit } from '@angular/core';
import { BotConfigService } from "../service/bot-config.service";
import { BotConfigRespository } from "../model/bot-config-repository.model";
import { ModelService } from "../../model/model.service";
import { Router }                 from '@angular/router';

@Component({
  selector: 'bot-config-dashboard',
  templateUrl: './bot-config-dashboard.component.html',
  styleUrls: ['./bot-config-dashboard.component.scss']
})
export class BotConfigDashboardComponent implements OnInit {

  public botConfigList : BotConfigRespository[];
  constructor(private botConfigService : BotConfigService,
    private modelService : ModelService,
    private router : Router) { }

  ngOnInit() {
      
      this.getBotConfigList();
  }
  getBotConfigList() {
    this.botConfigService.getBotConfigList().subscribe(
      data => {
        this.botConfigList = data;
        this.botConfigList.forEach(function (entry) {
          console.log("entry" + entry);
        });
        console.log(this.botConfigList);
        this.modelService.botConfigRespository = this.botConfigList;
      },
      error => console.log("ERROR ::" + error)
    );
  }

  editBot(bot : BotConfigRespository){
    console.log(bot);
    this.modelService.currentBot = bot;
    this.router.navigate(['/configure',bot.value.name.botName,'create-bot']);

  };

  configureBot(bot : BotConfigRespository){
    console.log(bot);
    this.modelService.currentBot = bot;
    this.router.navigate(['/configure',bot.value.name.botName,'choose-topics']);

  };

  createNewBot(){
    this.modelService.currentBot = null;
    this.router.navigate(['/configure','new','create-bot']);
  };

}
