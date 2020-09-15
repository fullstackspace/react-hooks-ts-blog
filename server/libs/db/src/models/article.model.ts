import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Article {
  @prop()
  @ApiProperty({ description: '标题', example: 'title' })
  title: string;

  @prop()
  @ApiProperty({ description: '文章内容', example: 'content' })
  content: string;

  @prop()
  @ApiProperty({ description: '文章类型', example: 'type' })
  article_type: string

  @prop()
  @ApiProperty({ description: '浏览数量', example: '1000' })
  look_number: number

  @prop()
  @ApiProperty({ description: '点赞数量', example: '1000' })
  star: number
}