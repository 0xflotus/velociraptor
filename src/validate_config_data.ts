import { ConfigData } from "./load_config.ts";
import { log } from "./logger.ts";

export function validateConfigData(configData: ConfigData | null) {
  if (!configData) {
    throw new Error("No scripts file found.");
  }
  if (
    !configData.config.scripts ||
    Object.entries(configData.config.scripts).length < 1
  ) {
    log.warning(
      "No scripts available.\nSee https://github.com/umbopepato/velociraptor for guidance on how to create scripts.",
    );
    Deno.exit();
  }
}
