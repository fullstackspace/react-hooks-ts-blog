import { User, UserDocument } from '@libs/db/models/user.model';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { AuthGuard } from '@nestjs/passport'
import { RegisterDto } from './dto/register';
import { LoginDto } from './dto/login';
import { JwtService } from '@nestjs/jwt'
import { CurrentUser } from './current-user.decorator';
// 对RegisterDto内的字段今进行接口文档的描述 -> 不需要将model模型注入就可以生成描述字段

@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private userModel: ReturnModelType<typeof User>
  ) { }
  @Post('register')
  // 接口添加中文注释
  @ApiOperation({ summary: '用户注册' })
  async register(@Body() dto: RegisterDto) {
    const { username, password } = dto
    const hasUser = await this.userModel.findOne({ username })
    if (hasUser) {
      return {
        msg: '用户名已存在,请重新输入用户名'
      }
    }
    const user = await this.userModel.create({ username, password })
    // 查询
    // const user = await this.userModel.findOne()
    return user
  }

  @Post('login')
  // 接口添加中文注释
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: LoginDto, @CurrentUser() user: UserDocument) {
    if (user._id) {
      return {
        // 通过用户的主键生成token
        msg: '登录成功',
        token: this.jwtService.sign(String(user._id))
      }
    } else {
      return user
    }
  }

  // 测试登录是否成功，token是否正确
  @Get('user')
  // 接口添加中文注释
  @ApiOperation({ summary: '获取用户个人信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth() // 表示当前接口可以传递token
  async user(@CurrentUser() user: UserDocument) {
    return user
  }
}
