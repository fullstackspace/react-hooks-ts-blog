import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Department {
  @ApiProperty({ description: '部门名称' })
  @prop()
  department_name: string

  @ApiProperty({ description: '部门人数' })
  @prop()
  department_number: string

  @ApiProperty({ description: '是否启用' })
  @prop()
  department_isUse: boolean

  @ApiProperty({ description: '部门描述' })
  @prop()
  department_desc: string
}