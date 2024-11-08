import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from '../class.schema';
import { Student } from '../student.shema';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Class.name) private readonly turmaProfessorModel: Model<Class>,
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
  ) {}

  async seed() {
    const turmas = [
      {
        code: 'TURMA001',
        courseId: 'DISC001',
        professorId: 'PROF001',
        campus: 'Campus Central',
        period: '2024.2',
        modality: 'Presencial',
      },
      {
        code: 'TURMA002',
        courseId: 'DISC002',
        professorId: 'PROF001',
        campus: 'Campus Central',
        period: '2024.2',
        modality: 'Presencial',
      },
      {
        code: 'TURMA003',
        courseId: 'DISC003',
        professorId: 'PROF001',
        campus: 'Campus Central',
        period: '2024.2',
        modality: 'Presencial',
      },
      {
        code: 'TURMA004',
        courseId: 'DISC004',
        professorId: 'PROF001',
        campus: 'Campus Sul',
        period: '2024.2',
        modality: 'Híbrido',
      },
      {
        code: 'TURMA005',
        courseId: 'DISC005',
        professorId: 'PROF003',
        campus: 'Campus Norte',
        period: '2024.2',
        modality: 'Online',
      },
      {
        code: 'TURMA006',
        courseId: 'DISC006',
        professorId: 'PROF001',
        campus: 'Campus Central',
        period: '2024.2',
        modality: 'Presencial',
      },
    ];

    const students = [
      // TURMA001
      {
        name: 'Charles Henrique',
        id: 'STU001',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA001'],
      },
      {
        name: 'Jimi Hendrix da Silva',
        id: 'STU002',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA001'],
      },
      {
        name: 'Amanda Oliveira',
        id: 'STU011',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA001'],
      },
      {
        name: 'Bruno Castro',
        id: 'STU012',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA001'],
      },
      {
        name: 'Carolina Dias',
        id: 'STU013',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA001'],
      },

      // TURMA002
      {
        name: 'Maria Santos',
        id: 'STU003',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA002'],
      },
      {
        name: 'João Pedro Oliveira',
        id: 'STU004',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA002'],
      },
      {
        name: 'Daniel Rocha',
        id: 'STU014',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA002'],
      },
      {
        name: 'Elena Martins',
        id: 'STU015',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA002'],
      },
      {
        name: 'Fabio Almeida',
        id: 'STU016',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA002'],
      },

      // TURMA003
      {
        name: 'Ana Carolina Lima',
        id: 'STU005',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA003'],
      },
      {
        name: 'Lucas Mendes',
        id: 'STU006',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA003'],
      },
      {
        name: 'Gabriela Torres',
        id: 'STU017',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA003'],
      },
      {
        name: 'Henrique Costa',
        id: 'STU018',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA003'],
      },
      {
        name: 'Isabel Santos',
        id: 'STU019',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA003'],
      },

      // TURMA004
      {
        name: 'Beatriz Costa',
        id: 'STU007',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA004'],
      },
      {
        name: 'Jorge Lima',
        id: 'STU020',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA004'],
      },
      {
        name: 'Karina Silva',
        id: 'STU021',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA004'],
      },
      {
        name: 'Leonardo Pereira',
        id: 'STU022',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA004'],
      },
      {
        name: 'Marina Costa',
        id: 'STU023',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA004'],
      },

      // TURMA005
      {
        name: 'Rafael Souza',
        id: 'STU008',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA005'],
      },
      {
        name: 'Camila Ferreira',
        id: 'STU009',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA005'],
      },
      {
        name: 'Nathan Barbosa',
        id: 'STU024',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA005'],
      },
      {
        name: 'Olivia Fernandes',
        id: 'STU025',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA005'],
      },
      {
        name: 'Paulo Ricardo',
        id: 'STU026',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA005'],
      },

      // TURMA006
      {
        name: 'Gabriel Santos',
        id: 'STU010',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA006'],
      },
      {
        name: 'Renata Gomes',
        id: 'STU027',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA006'],
      },
      {
        name: 'Samuel Cardoso',
        id: 'STU028',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA006'],
      },
      {
        name: 'Talita Ribeiro',
        id: 'STU029',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA006'],
      },
      {
        name: 'Vitor Hugo',
        id: 'STU030',
        status: 'NAO_AVALIADO',
        classCodeList: ['TURMA006'],
      },
    ];

    await this.turmaProfessorModel.deleteMany({});
    await this.turmaProfessorModel.insertMany(turmas);

    await this.studentModel.deleteMany({});
    await this.studentModel.insertMany(students);

    console.log('Coleção turmaProfessor seeded com sucesso!');
    console.log('Coleção student seeded com sucesso!');
  }
}
