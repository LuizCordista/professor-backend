import { Student } from 'src/infra/schemas/student.shema';

export interface UpdateStatusStudentByEvaluationInput {
  studentId: string;
  aulasLecionadas: number;
  aulasAssistidas: number;
  notaP1: number;
  notaP2: number;
}

export type UpdateStatusStudentByEvaluationResult = Student;
