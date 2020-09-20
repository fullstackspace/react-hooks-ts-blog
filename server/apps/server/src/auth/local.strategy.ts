// 本地策略
import { Strategy, IStrategyOptions } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '@libs/db/models/user.model'
import { ReturnModelType } from '@typegoose/typegoose'
import { BadRequestException } from '@nestjs/common'
import { compareSync } from 'bcryptjs'
// 逻辑
export class LocalStrategy extends PassportStrategy(Strategy,'local') {
  // 名字不一样是要书写
  constructor(@InjectModel(User) private userModel: ReturnModelType<typeof User>) {
    super({
      usernameField: 'username',
      passwordField: 'password'
    } as IStrategyOptions)
  }

  // 如何去验证
  async validate(username: string, password: string) {
    // 验证逻辑
    // select明确需要查出密码
    const user = await this.userModel.findOne({ username }).select('+password')
    if (!user) {
      throw new BadRequestException('用户名不正确')
    }
    if (!compareSync(username, user.password)) {
      throw new BadRequestException('密码不正确')
    }
    return user
  }
}