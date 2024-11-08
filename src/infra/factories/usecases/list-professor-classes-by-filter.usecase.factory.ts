import { Injectable } from '@nestjs/common';
import { ListProfessorClassesByFilterUsecase } from '../../../domain/usecases/list-professor-classes-by-filter/list-professor-classes-by-filter.usecase';
import { ListProfessorClassesByFilterPortFactory } from '../ports/list-professor-classes-by-filter.port.factory';
import { CheckClassStatusUsecaseFactory } from './check-class-status.usecase.factory';

@Injectable()
export class ListProfessorClassesByFilterUsecaseFactory {
  constructor(
    private readonly listProfessorClassesByFilterPortFactory: ListProfessorClassesByFilterPortFactory,
    private readonly checkClassStatusUsecaseFactory: CheckClassStatusUsecaseFactory,
  ) {}

  getInstance(): ListProfessorClassesByFilterUsecase {
    return new ListProfessorClassesByFilterUsecase(
      this.listProfessorClassesByFilterPortFactory.getInstance(),
      this.checkClassStatusUsecaseFactory.getInstance(),
    );
  }
}
