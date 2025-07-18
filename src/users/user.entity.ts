import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';


@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  sexo: string;

  @Column()
  fechaNacimiento: Date;

  @Column()
  correo: string;

  @Column()
  whatsapp: string;

  @Column()
  password: string;
}
