import { Injectable } from '@nestjs/common';
import { UpdateStudentStatusPortFactory } from '../ports/update-studant-status.port.factory';
import { UpdateStudentStatusByEvaluationUsecase } from '../../../domain/usecases/update-student-status-by-evaluation/update-student-status-by-evaluation.usecase';

@Injectable()
export class UpdateStudentStatusByEvaluationUsecaseFactory {
  constructor(private readonly updateStudentStatusPortFactory: UpdateStudentStatusPortFactory) {}

  getInstance(): UpdateStudentStatusByEvaluationUsecase {
    return new UpdateStudentStatusByEvaluationUsecase(this.updateStudentStatusPortFactory.getInstance());
  }
}
