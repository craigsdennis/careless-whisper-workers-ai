import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  transcribe: defineAction({
    input: z.object({
      audio: z.string(),
      initial_prompt: z.optional(z.string()),
      prefix: z.optional(z.string())
    }),
    handler: async (input, context) => {
      const { env } = context.locals.runtime;
      const results = await env.AI.run("@cf/openai/whisper-large-v3-turbo", input);
      if (results === undefined) {
        throw new ActionError({
            message: "Problem while transcribing",
            code: "BAD_REQUEST"
        });
      }
      return results;
    },
  }),
  translate: defineAction({
    input: z.object({
      audio: z.string(),
      task: z.string().default("translate"),
      language: z.string(),
    }),
    handler: async(input, context) => {
      const { env } = context.locals.runtime;
      console.log({input});
      const results = await env.AI.run("@cf/openai/whisper-large-v3-turbo", input);
      if (results === undefined) {
        throw new ActionError({
            message: "Problem while translating",
            code: "BAD_REQUEST"
        });
      }
      return results;
    }
  })
};
