import { User } from '@prisma/client';
export declare class UserController {
    getMe(user: User, email: string): {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firtsName: string;
        lastName: string;
    };
    editUser(): void;
}
