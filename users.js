// Enhanced user management with better "security"
class UserManager {
    static getUsers() {
        const stored = localStorage.getItem('websiteUsers');
        if (stored) {
            return JSON.parse(stored);
        }
        
        // Default users for demo
        const defaultUsers = [
            {
                email: 'admin@example.com',
                passwordHash: this.hashPassword('admin123'),
                id: 1,
                role: 'admin'
            },
            {
                email: 'user@example.com', 
                passwordHash: this.hashPassword('user123'),
                id: 2,
                role: 'user'
            }
        ];
        
        localStorage.setItem('websiteUsers', JSON.stringify(defaultUsers));
        return defaultUsers;
    }

    static hashPassword(password) {
        // Simple hash - in production, use proper hashing with salt
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16);
    }

    static validateUser(email, password) {
        const users = this.getUsers();
        const passwordHash = this.hashPassword(password);
        return users.find(user => 
            user.email === email && user.passwordHash === passwordHash
        );
    }

    static registerUser(email, password) {
        const users = this.getUsers();
        if (users.find(user => user.email === email)) {
            return false; // User already exists
        }
        
        const newUser = {
            email: email,
            passwordHash: this.hashPassword(password),
            id: Date.now(),
            role: 'user'
        };
        
        users.push(newUser);
        localStorage.setItem('websiteUsers', JSON.stringify(users));
        return true;
    }
}