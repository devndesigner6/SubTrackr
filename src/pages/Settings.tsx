import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Notifications,
  Security,
  Language,
  AttachMoney,
  Email,
  AccountCircle,
  Smartphone,
  CloudSync,
} from '@mui/icons-material';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    reminderDays: 3,
  });

  const [preferences, setPreferences] = useState({
    currency: 'USD',
    timezone: 'America/New_York',
    language: 'en',
    darkMode: true,
  });

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '',
  });

  const handleNotificationChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications(prev => ({
      ...prev,
      [key]: event.target.checked,
    }));
  };

  const handlePreferenceChange = (key: string) => (event: any) => {
    setPreferences(prev => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Customize your SubTrackr experience
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Profile Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                <AccountCircle color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">Profile Settings</Typography>
              </Box>
              
              <Box display="flex" justifyContent="center" sx={{ mb: 3 }}>
                <Avatar
                  src={profile.avatar}
                  sx={{ width: 80, height: 80, bgcolor: 'primary.main' }}
                >
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={profile.name}
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={profile.email}
                    disabled
                    helperText="Email cannot be changed as it's linked to your Google account"
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{ mt: 2 }}
                fullWidth
              >
                Update Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                <Notifications color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">Notification Settings</Typography>
              </Box>

              <List>
                <ListItem>
                  <ListItemText
                    primary="Email Notifications"
                    secondary="Receive reminder emails before renewals"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={notifications.email}
                      onChange={handleNotificationChange('email')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="SMS Notifications"
                    secondary="Receive text messages for urgent reminders"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={notifications.sms}
                      onChange={handleNotificationChange('sms')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="Push Notifications"
                    secondary="Browser push notifications"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={notifications.push}
                      onChange={handleNotificationChange('push')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>

              <TextField
                fullWidth
                label="Default Reminder Days"
                type="number"
                value={notifications.reminderDays}
                onChange={(e) => setNotifications(prev => ({
                  ...prev,
                  reminderDays: parseInt(e.target.value) || 3
                }))}
                helperText="How many days before renewal to send reminders"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Preferences */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                <Language color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">Preferences</Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Currency</InputLabel>
                    <Select
                      value={preferences.currency}
                      label="Currency"
                      onChange={handlePreferenceChange('currency')}
                    >
                      <MenuItem value="USD">USD - US Dollar</MenuItem>
                      <MenuItem value="EUR">EUR - Euro</MenuItem>
                      <MenuItem value="GBP">GBP - British Pound</MenuItem>
                      <MenuItem value="CAD">CAD - Canadian Dollar</MenuItem>
                      <MenuItem value="AUD">AUD - Australian Dollar</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Timezone</InputLabel>
                    <Select
                      value={preferences.timezone}
                      label="Timezone"
                      onChange={handlePreferenceChange('timezone')}
                    >
                      <MenuItem value="America/New_York">Eastern Time</MenuItem>
                      <MenuItem value="America/Chicago">Central Time</MenuItem>
                      <MenuItem value="America/Denver">Mountain Time</MenuItem>
                      <MenuItem value="America/Los_Angeles">Pacific Time</MenuItem>
                      <MenuItem value="Europe/London">London</MenuItem>
                      <MenuItem value="Europe/Paris">Paris</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Language</InputLabel>
                    <Select
                      value={preferences.language}
                      label="Language"
                      onChange={handlePreferenceChange('language')}
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                      <MenuItem value="fr">French</MenuItem>
                      <MenuItem value="de">German</MenuItem>
                      <MenuItem value="it">Italian</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{ mt: 2 }}
                fullWidth
              >
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Privacy & Security */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                <Security color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">Privacy & Security</Typography>
              </Box>

              <List>
                <ListItem>
                  <ListItemText
                    primary="Gmail Integration"
                    secondary="Connected and scanning for subscription emails"
                  />
                  <ListItemSecondaryAction>
                    <Chip label="Connected" color="success" size="small" />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="Data Export"
                    secondary="Download all your subscription data"
                  />
                  <ListItemSecondaryAction>
                    <Button size="small" variant="outlined">
                      Export
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="Account Deletion"
                    secondary="Permanently delete your account and data"
                  />
                  <ListItemSecondaryAction>
                    <Button size="small" variant="outlined" color="error">
                      Delete
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Connected Services */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                <CloudSync color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">Connected Services</Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      p: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Email sx={{ mr: 2, color: 'primary.main' }} />
                      <Box>
                        <Typography variant="subtitle2">Gmail</Typography>
                        <Typography variant="caption" color="text.secondary">
                          Email scanning
                        </Typography>
                      </Box>
                    </Box>
                    <Chip label="Active" color="success" size="small" />
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      p: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Smartphone sx={{ mr: 2, color: 'text.secondary' }} />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Mobile App
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Coming soon
                        </Typography>
                      </Box>
                    </Box>
                    <Chip label="Soon" variant="outlined" size="small" />
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      p: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <AttachMoney sx={{ mr: 2, color: 'text.secondary' }} />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Bank Integration
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Auto-detect payments
                        </Typography>
                      </Box>
                    </Box>
                    <Chip label="Soon" variant="outlined" size="small" />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;
