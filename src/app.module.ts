import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsModule } from './reports/reports.module';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { UserModule } from './user/user.module';



@Module({
  imports: [
    ReportsModule,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    
  ],
})
export class AppModule {}
