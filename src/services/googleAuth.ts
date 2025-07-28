// Google OAuth Authentication Service
// Handles Google Sign-In integration for SubTrackr

export interface GoogleUser {
  id: string;
  email: string;
  name: string;
  picture?: string;
}

class GoogleAuthService {
  private clientId: string;

  constructor() {
    this.clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'development-client-id';
  }

  // Development Google Sign-In for testing
  async signIn(): Promise<GoogleUser> {
    // Simulate authentication flow
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 'user-' + Math.random().toString(36).substr(2, 9),
          email: 'user@gmail.com',
          name: 'John Doe',
          picture: 'https://lh3.googleusercontent.com/a/default-user=s96-c'
        });
      }, 1000);
    });
  }

  // Production Google Sign-In implementation
  /*
  async signIn(): Promise<GoogleUser> {
    return new Promise((resolve, reject) => {
      if (!window.google) {
        reject(new Error('Google SDK not loaded'));
        return;
      }

      window.google.accounts.id.initialize({
        client_id: this.clientId,
        callback: (response: any) => {
          const decoded = this.parseJwt(response.credential);
          resolve({
            id: decoded.sub,
            email: decoded.email,
            name: decoded.name,
            picture: decoded.picture
          });
        }
      });

      window.google.accounts.id.prompt();
    });
  }

  private parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
  */

  signOut(): void {
    // Clear Google session
    console.log('User signed out');
  }
}

export const googleAuthService = new GoogleAuthService();
