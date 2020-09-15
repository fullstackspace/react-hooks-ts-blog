import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Department } from './models/department.model';
import { Article } from './models/article.model';

// 模块模型引入
const models = TypegooseModule.forFeature([User, Department, Article])
@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: true,
        }
      }
    }),
    models, // 将models构建的模型导入当前模块
  ],
  providers: [DbService],
  exports: [DbService, models],  // 导出
})
export class DbModule { }
