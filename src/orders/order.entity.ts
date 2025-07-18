import { Entity, ObjectIdColumn, ObjectId, Column , CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  direccionRecoleccion: string;

  @Column()
  fechaProgramada: Date;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  correoElectronico: string;

  @Column()
  telefono: string;

  @Column()
  direccionDestinatario: string;

  @Column()
  departamento: string;

  @Column()
  municipio: string;

  @Column()
  puntoReferencia: string;

  @Column()
  indicaciones: string;

  @Column('array')
  productos: {
    largo: number;
    alto: number;
    ancho: number;
    pesoLibras: string;
    contenido: string;
  }[];

  @Column()
  usuarioId: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;
}
