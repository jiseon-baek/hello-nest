import { Controller, Delete, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUser():any {
        return [{ id: 0 }];
    }

    @Delete(':userId/memo/:memoId')
    deleteUserMemo(
        @Param('userId') userId: string,
        @Param('memoId') memoId: string
    ) {
        return `userId: ${userId}, memoId: ${memoId}`;
    }
}
