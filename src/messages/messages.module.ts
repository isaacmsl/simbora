import { Module } from '@nestjs/common';
import { WppconnectService } from 'src/wppconnect/wppconnect.service';
import { MessagesService } from './messages.service';

@Module({
  providers: [WppconnectService, MessagesService],
  exports: [WppconnectService, MessagesService],
})
export class MessagesModule {}
