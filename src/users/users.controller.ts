import { Controller, Patch, Body } from '@nestjs/common';
import { User } from 'src/user/user.entity';

@Controller('users')
export class UsersController {
    @Patch('role')
    updateRole(@Body() body: any) {
        const { role } = body
        
        if(role != 'USER' && role != 'PROFESSIONAL') {
            return {
                error: 'Invalid role'
            }
        }

        const mockUser = new User({
            id: 'mock-user-id',
            email: 'test@email.com',
            role,
            updatedAt: new Date()
        })

        return {
            id: mockUser.id,
            role: mockUser.role
        }
    }
}
