import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetController } from './get/get.controller';

@Module({
  imports: [],
  controllers: [AppController, GetController],
  providers: [AppService],
})
export class AppModule {}
