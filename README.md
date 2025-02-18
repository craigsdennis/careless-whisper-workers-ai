# Careless Whisper

This is an [Astro web application](https://astro.build) built on [Cloudflare Workers](). It uses the Whisper Model hosted on Workers AI to provide transcriptions and translations.

The [meat of the application happens in the Astro actions](./src/actions/index.ts).

[<img src="https://img.youtube.com/vi/Df04laN8Y3s/0.jpg">](https://youtu.be/https://youtu.be/Df04laN8Y3s "Add Automatic Speech Recognition to your Web Apps")


## Setup



### Develop Locally

```bash
npm install
npm run dev
```

### Deploy

NOTE: Uncomment the services in wrangler.toml if you want to use the autotranscriber microservice.

```bash
npm deploy
```

