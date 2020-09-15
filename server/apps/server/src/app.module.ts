import { CommonModule } from '@libs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [CommonModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
