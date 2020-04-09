import * as log from "https://deno.land/std/log/mod.ts";

// custom configuration
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      // you can change format of output message
      formatter: "{levelName} {msg}",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },

    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

// get default logger
export const logger = log.getLogger();
//logger.debug("fizz"); // logs to `console`, because `file` handler requires "WARNING" level
//logger.warning("buzz"); // logs to both `console` and `file` handlers
