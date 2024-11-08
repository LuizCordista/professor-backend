import { ValidationError } from '../../errors/validation.error';
import { UpdateStudentStatusPort } from '../../ports/update-student-status.port';
import { UpdateStatusStudentByEvaluationResult } from './update-student-status-by-evaluation.types';

export class UpdateStudentStatusByEvaluationUsecase {
  constructor(private readonly updateStudentStatusPort: UpdateStudentStatusPort) {}

  async execute({
    studentId,
    aulasLecionadas,
    aulasAssistidas,
    notaP1,
    notaP2,
  }): Promise<UpdateStatusStudentByEvaluationResult> {
    if (!studentId) {
      throw new ValidationError('Estudante não informado');
    }

    if (aulasLecionadas < 0 || aulasAssistidas < 0) {
      throw new ValidationError('Número de aulas não pode ser negativo');
    }

    if (aulasAssistidas > aulasLecionadas) {
      throw new ValidationError('Número de aulas assistidas não pode ser maior que o número de aulas lecionadas');
    }

    if ((notaP1 != null && (notaP1 < 0 || notaP1 > 10)) || (notaP2 != null && (notaP2 < 0 || notaP2 > 10))) {
      throw new ValidationError('Nota deve estar entre 0 e 10');
    }

    let newStatus: string = 'NAO_AVALIADO';

    if (notaP1 != null && notaP2 != null) {
      const average = (notaP1 + notaP2) / 2;
      const frequency = aulasAssistidas / aulasLecionadas;

      if (average < 5.0) {
        newStatus = 'REPROVADO';
      } else if (average >= 7.0 && frequency >= 0.75) {
        newStatus = 'APROVADO';
      } else {
        newStatus = 'EM_EXAME';
      }
    }

    const studentUpdated = await this.updateStudentStatusPort.execute({
      studentId,
      newStatus,
    });

    return studentUpdated;
  }
}
