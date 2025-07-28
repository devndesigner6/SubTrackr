import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent                    <Typography variant="h6" gutterBottom>
                      Smart Detection
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Automatically scans and detects subscription services
                    </Typography>utton,
  Avatar,
  CircularProgress,
} from '@mui/material';
import {
  TrendingUp,
  AttachMoney,
  Subscriptions,
  Warning,
  Google,
} from '@mui/icons-material';
import { googleAuthService } from '../services/googleAuth';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      
      // Use Google Auth service
      const googleUser = await googleAuthService.signIn();
      
      // Create mock token and user data
      const token = 'mock-jwt-token-' + Date.now();
      const userData = {
        id: googleUser.id,
        email: googleUser.email,
        name: googleUser.name,
        avatar: googleUser.picture
      };
      
      // Login with the user data
      await login(token, userData);
      
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(245, 158, 11, 0.1))',
          filter: 'blur(40px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(99, 102, 241, 0.1))',
          filter: 'blur(40px)',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Features */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #6366f1 0%, #f59e0b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                SubTrackr
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                Never miss a subscription deadline or waste money on forgotten auto-renewals
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
                      <Subscriptions />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Auto-Detection
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI scans your inbox to find all subscriptions automatically
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Avatar sx={{ bgcolor: 'secondary.main', mb: 2 }}>
                      <TrendingUp />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Smart Analytics
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Visualize spending patterns and get optimization suggestions
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
                      <Warning />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Smart Reminders
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get notified before renewals and trial expirations
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Avatar sx={{ bgcolor: 'secondary.main', mb: 2 }}>
                      <AttachMoney />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Cost Optimization
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Identify unused subscriptions and save money
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Right side - Login */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                maxWidth: 400,
                mx: 'auto',
                p: 4,
                textAlign: 'center',
                background: 'linear-gradient(145deg, #1e293b 0%, #334155 100%)',
                border: '1px solid rgba(100, 116, 139, 0.2)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Welcome Back
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Sign in to access your subscription dashboard
              </Typography>

              <Button
                variant="contained"
                size="large"
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Google />}
                onClick={handleGoogleLogin}
                disabled={loading}
                sx={{
                  width: '100%',
                  py: 1.5,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  },
                  '&:disabled': {
                    background: 'rgba(99, 102, 241, 0.5)',
                  },
                }}
              >
                {loading ? 'Signing in...' : 'Continue with Google'}
              </Button>

              <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(99, 102, 241, 0.1)', borderRadius: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  🔒 Your data is encrypted and never shared. We only read subscription-related emails with your permission.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
