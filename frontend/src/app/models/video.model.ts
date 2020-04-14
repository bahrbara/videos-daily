export class User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    role?: string;

    constructor(user) {
        this.id = user.id || '',
        this.name = user.name || '';
        this.email = user.email || '';
        this.password = user.password || '';
        this.role = user.role || '';
    }

    isAdmin(): boolean {
        return (this.role === 'ADMIN');
    }

    isTriador(): boolean {
        return (this.role === 'TRIADOR');
    }

    isFinalizador(): boolean {
        return (this.role === 'FINALIZADOR');
    }
}