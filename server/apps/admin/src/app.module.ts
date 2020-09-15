import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DepartmentModule } from './department/department.module';
import { CommonModule } from '@libs/common';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [CommonModule, UsersModule, DepartmentModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
