// 本地策略
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '@libs/db/models/user.model'
import { ReturnModelType } from '@typegoose/typegoose'
// 逻辑
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  // 名字不一样是要书写
  constructor(@InjectModel(User) private userModel: ReturnModelType<typeof User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),// 1.取出token
      secretOrKey: process.env.SECERT // 2.解密token
    } as StrategyOptions)
  }
  // 1.取出token
  // 2.解密token.通过解密信息去找对应的数据

  async validate(id) {
    return await this.userModel.findById(id)
  }
}