import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ResultModule } from './result/result.module';

@Module({
  imports: [CoreModule, ResultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
