import { User } from '@libs/db/models/user.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

// 对RegisterDto内的字段今进行接口文档的描述 -> 不需要将model模型注入就可以生成描述字段
export class RegisterDto {
  @ApiProperty()
  username: string
  @ApiProperty()
  password: string
}

@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor(@InjectModel(User) private userModel: ReturnModelType<typeof User>) { }
  @Post('register')
  // 接口添加中文注释
  @ApiOperation({ summary: '用户注册' })
  async register(@Body() dto: RegisterDto) {
    const { username, password } = dto
    const user =  await this.userModel.create({ username, password })
    return user
  }

  @Post('login')
  // 接口添加中文注释
  @ApiOperation({ summary: '登录' })
  async login(@Body() dto) {
    return dto
  }

  // 测试登录是否成功，token是否正确
  @Get('user')
  // 接口添加中文注释
  @ApiOperation({ summary: '获取用户个人信息' })
  async user() {
    return {}
  }
}
