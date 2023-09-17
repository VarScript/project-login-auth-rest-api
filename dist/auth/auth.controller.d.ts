import { AuthService } from './auth.service';
import { AuthDto } from 'src/dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firtsName: string;
        lastName: string;
    }>;
    signin(): {
        msg: string;
    };
}
