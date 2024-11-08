export interface UpdateStatusStudentByEvaluationInput {
  aulasLecionadas: number;
  aulasAssistidas: number;
  notaP1: number;
  notaP2: number;
}

export interface StudentResponseBody {
  name: string;
  id: string;
  status: string;
}
