import { Department } from '@libs/db/models/department.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Department
})
@ApiTags('部门')
@Controller('department')
export class DepartmentController {
  constructor(@InjectModel(Department) private readonly model) { }
}
