import {
  ListProfessorClassesByFilterPort as ListProfessorClassesByFilterPort,
  ListProfessorClassesByFilterPortResult,
} from '../../ports/list-professor-classes-by-filter.port';
import {
  ListProfessorClassesByFilterInput as ListProfessorClassesByFilterInput,
  ListProfessorClassesByFilterResult,
} from './list-professor-classes-by-filter.types';
import { CheckClassStatusUsecase } from '../check-class-status/check-class-status.usecase';

export class ListProfessorClassesByFilterUsecase {
  constructor(
    private readonly listProfessorClassesByFilterPort: ListProfessorClassesByFilterPort,
    private readonly checkClassStatusUsecase: CheckClassStatusUsecase,
  ) {}

  async execute({ professorId }: ListProfessorClassesByFilterInput): Promise<ListProfessorClassesByFilterResult> {
    const classes: ListProfessorClassesByFilterPortResult = await this.listProfessorClassesByFilterPort.execute({
      professorId,
    });

    return await Promise.all(
      classes.map(async (classItem) => {
        const status = await this.checkClassStatusUsecase.execute({ classId: classItem.code });
        return { ...classItem, status };
      }),
    );
  }
}
