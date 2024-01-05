import { Module } from '@nestjs/common';
import { ServiceLibService } from './service.lib.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [ServiceLibService],
})
export class ServiceLibModule {}
