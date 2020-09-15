import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DbModule } from '@libs/db';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [UsersModule, DbModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
