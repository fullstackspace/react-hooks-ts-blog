import { Article } from '@libs/db/models/article.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Article,
  routes: {
    create: false,
    update: false,
    delete: false
  }
})
@Controller('article')
@ApiTags('文章')
export class ArticleController {
  constructor(@InjectModel(Article) private model) { }
}
