import { Article } from '@libs/db/models/article.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'


@Crud({
  model: Article
})
@Controller('article')
@ApiTags('文章')
export class ArticleController {
  constructor(@InjectModel(Article) private model) { }
}
