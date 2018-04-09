import { BotConfig } from "./bot-config.model";

export interface BotConfigRespository {
  id: string;
  bot_id: string;
  step_config: string;
  value: BotConfig[];
  stratus: string;
  update_ts: string;
}
