import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, prop, DocumentType } from '@typegoose/typegoose'
import { hashSync } from 'bcryptjs'

export type UserDocument = DocumentType<User>
@modelOptions({
  schemaOptions: {
    timestamps: true  // 配置生成创建时间
  }
})
export class User {
  @ApiProperty({ description: '用户名', example: 'user1' })
  @prop()
  username: string

  @ApiProperty({ description: '密码', example: 'password1' })
  @prop({
    select: false,
    set(val) {
      return val ? hashSync(val) : val
    },
    get(val) {
      return val
    }
  })
  password: string
}