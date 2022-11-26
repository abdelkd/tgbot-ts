import { Bot } from "grammy";

import dotenv from 'dotenv';
dotenv.config()

let BOT_TOKEN: string = process.env.BOT_TOKEN!

const bot = new Bot(BOT_TOKEN)
console.log('The Bot is Now Running...')

bot.command('start', (ctx) => {
  ctx.reply('Welcome! send me a text and i\'ll reply back with same text')
})

bot.on(':text', async (ctx) => {
    let message = ctx.msg.text;
    ctx.reply(message)
})

bot.start()
