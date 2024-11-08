import { Controller, Post, Header, HttpCode, HttpStatus, Param, Body, BadRequestException } from '@nestjs/common';
import { UpdateStudentStatusByEvaluationUsecaseFactory } from '../../../../infra/factories/usecases/update-student-status-by-evaluation.usecase.factory';
import { UpdateStatusStudentByEvaluationInput, StudentResponseBody } from './update-student-status-by-evaluation.types';
import { UpdateStudentStatusPortResult } from '../../../../domain/ports/update-student-status.port';
import { ValidationError } from '../../../../domain/errors/validation.error';

@Controller()
export class UpdateStudentStatusByEvaluationController {
  constructor(private readonly usecaseFactory: UpdateStudentStatusByEvaluationUsecaseFactory) {}

  @Post('/students/:id/evaluation')
  @HttpCode(HttpStatus.OK)
  @Header('access-control-allow-origin', '*')
  async execute(
    @Param('id') id: string,
    @Body() input: UpdateStatusStudentByEvaluationInput,
  ): Promise<StudentResponseBody> {
    try {
      const usecase = this.usecaseFactory.getInstance();

      const student = await usecase.execute({ studentId: id, ...input });

      return this.mapToResponseBody(student);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }

  private mapToResponseBody(student: UpdateStudentStatusPortResult): StudentResponseBody {
    return {
      name: student.name,
      id: student.id,
      status: student.status,
    };
  }
}
