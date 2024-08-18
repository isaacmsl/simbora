import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WppconnectService } from './wppconnect/wppconnect.service';
import { MessagesService } from './messages/messages.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const wppconnectService = app.get(WppconnectService);
  const messagesService = app.get(MessagesService);

  await wppconnectService.initialize();
  await messagesService.handleMessage();
}

bootstrap();
