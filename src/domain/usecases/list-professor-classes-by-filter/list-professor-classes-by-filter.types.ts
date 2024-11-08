import { Class } from '../../models/class.model';

export interface ListProfessorClassesByFilterInput {
  professorId: string;
}

export type ListProfessorClassesByFilterResult = (Class & { status: string })[];
