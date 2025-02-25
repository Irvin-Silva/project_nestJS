import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id:number) {
      return this.userService.findById(id);

    }
  @Post()    
  createUser(@Body() body:any) {
    console.log(body);
    return this.userService.createUser(body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id:string) {
    return this.userService.deleteUser(Number(id));
  }
  
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id:string, 
  @Body() body:any) {
    return this.userService.updateUser(Number(id), body);
  }
}
