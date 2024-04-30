import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {
  ApiOperation,
  ApiParam,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Member } from 'src/members/entities/member.entity';

@Controller('members')
@ApiTags('/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Create a new member' })
  @ApiResponse({ status: 201, description: 'The member', type: Member })
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Get all members' })
  @ApiResponse({ status: 200, description: 'The members', type: Member })
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Get a member by id' })
  @ApiResponse({ status: 200, description: 'The member', type: Member })
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'update' })
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 200, description: 'The member', type: Member })
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'delete' })
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({ status: 200, description: 'The member', type: Member })
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
