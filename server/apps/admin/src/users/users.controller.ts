import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: User
})
@ApiTags('用户')
@Controller('users')
export class UsersController {
  // 将User模型注入到当前控制器
  constructor(@InjectModel(User) private readonly model) { }
}
