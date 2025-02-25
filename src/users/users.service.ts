import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
    private users =
    [
        {
          "id": 1,
          "nombre": "Juan Pérez",
          "edad": 28,
          "email": "juan.perez@email.com"
        },
        {
          "id": 2,
          "nombre": "Ana Gómez",
          "edad": 34,
          "email": "ana.gomez@email.com"
        },
        {
          "id": 3,
          "nombre": "Carlos López",
          "edad": 22,
          "email": "carlos.lopez@email.com"
        }
      ];

    //Find all users   
    findAll() {
        return this.users;
    }

    //Find user by id
    findById(id:number){
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    //Create user
    createUser(user){
        this.users.push(user);
        return user.id;
    }
    deleteUser(id:number){
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        this.users.splice(index, 1);
        return `User with id ${id} deleted`;
    }

    updateUser(id:number, user:any){
       console.log(id);
       console.log(user);
       return `User with id ${id} updated`;

    }

      
}
