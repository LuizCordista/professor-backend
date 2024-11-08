import { Controller, Get, Header, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ClassResponseBody } from './list-professor-classes-by-filter.types';
import { ListProfessorClassesByFilterUsecaseFactory } from '../../../../infra/factories/usecases/list-professor-classes-by-filter.usecase.factory';
import { ListProfessorClassesByFilterPortResult } from '../../../../domain/ports/list-professor-classes-by-filter.port';
import { ListProfessorClassesByFilterResult } from '../../../../domain/usecases/list-professor-classes-by-filter/list-professor-classes-by-filter.types';

@Controller()
export class ListProfessorClassesByFilterController {
  constructor(private readonly usecaseFactory: ListProfessorClassesByFilterUsecaseFactory) {}

  @Get('/professors/:id/classes')
  @HttpCode(HttpStatus.OK)
  @Header('access-control-allow-origin', '*')
  async execute(@Param('id') professorId: string): Promise<ClassResponseBody[]> {
    const usecase = this.usecaseFactory.getInstance();

    const classes: ListProfessorClassesByFilterResult = await usecase.execute({ professorId });

    return this.mapToResponseBody(classes);
  }

  private mapToResponseBody(classes: ListProfessorClassesByFilterResult): ClassResponseBody[] {
    return classes.map((classItem) => ({
      code: classItem.code,
      courseId: classItem.courseId,
      professorId: classItem.professorId,
      campus: classItem.campus,
      period: classItem.period,
      modality: classItem.modality,
      status: classItem.status,
    }));
  }
}
