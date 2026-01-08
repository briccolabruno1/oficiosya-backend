export class User { 
    id: string;
    email: string
    passwordHash: string

    role: 'USER' | 'PROFESSIONAL'

    createdAt: Date;
    updatedAt: Date;

    constructor(partial?: Partial<User>) {
        Object.assign(this, partial);
    }
}