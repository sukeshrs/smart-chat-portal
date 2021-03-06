import { BotConfig } from "./bot-config.model";

export interface BotConfigRespository {
  id?: string;
  botId: string;
  stepConfig: string;
  value: BotConfig;
  status: string;
  update_ts?: string;
}
