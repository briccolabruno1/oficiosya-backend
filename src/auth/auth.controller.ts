import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
    
    @Post('register')
    register(@Body() body: any) {
        const { email, password } = body
        
        const userMock = new User({
            id: 'mock-user-id',
            email,
            passwordHash: 'hashed-password',
            role: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        return {
            id: userMock.id,
            email: userMock.email,
            role: userMock.role
        }
    }
}
