import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  Add,
  MoreVert,
  Edit,
  Delete,
  Pause,
  PlayArrow,
  Notifications,
  AttachMoney,
} from '@mui/icons-material';

// Sample data
const subscriptions = [
  {
    id: 1,
    name: 'Netflix',
    cost: 15.99,
    billingCycle: 'monthly',
    nextBilling: '2025-08-01',
    category: 'Entertainment',
    status: 'active',
    logo: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    name: 'Spotify Premium',
    cost: 9.99,
    billingCycle: 'monthly',
    nextBilling: '2025-08-03',
    category: 'Entertainment',
    status: 'active',
    logo: 'https://via.placeholder.com/40',
  },
  {
    id: 3,
    name: 'Adobe Creative Cloud',
    cost: 52.99,
    billingCycle: 'monthly',
    nextBilling: '2025-08-05',
    category: 'Software',
    status: 'active',
    logo: 'https://via.placeholder.com/40',
  },
  {
    id: 4,
    name: 'GitHub Pro',
    cost: 48.0,
    billingCycle: 'yearly',
    nextBilling: '2025-12-15',
    category: 'Software',
    status: 'active',
    logo: 'https://via.placeholder.com/40',
  },
  {
    id: 5,
    name: 'Notion Pro',
    cost: 8.0,
    billingCycle: 'monthly',
    nextBilling: '2025-07-30',
    category: 'Productivity',
    status: 'paused',
    logo: 'https://via.placeholder.com/40',
  },
];

const Subscriptions: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, subscription: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedSubscription(subscription);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedSubscription(null);
  };

  const handleAddSubscription = () => {
    setOpenDialog(true);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Entertainment: '#6366f1',
      Software: '#10b981',
      Productivity: '#f59e0b',
      Health: '#ef4444',
      Finance: '#8b5cf6',
    };
    return colors[category] || '#6b7280';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'paused':
        return 'warning';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const filteredSubscriptions = subscriptions.filter((sub) => {
    if (filter === 'all') return true;
    return sub.status === filter;
  });

  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Subscriptions
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage all your subscriptions in one place
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddSubscription}
          sx={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            },
          }}
        >
          Add Subscription
        </Button>
      </Box>

      {/* Filter Chips */}
      <Box sx={{ mb: 3 }}>
        <Chip
          label="All"
          onClick={() => setFilter('all')}
          variant={filter === 'all' ? 'filled' : 'outlined'}
          sx={{ mr: 1, mb: 1 }}
        />
        <Chip
          label="Active"
          onClick={() => setFilter('active')}
          variant={filter === 'active' ? 'filled' : 'outlined'}
          sx={{ mr: 1, mb: 1 }}
        />
        <Chip
          label="Paused"
          onClick={() => setFilter('paused')}
          variant={filter === 'paused' ? 'filled' : 'outlined'}
          sx={{ mr: 1, mb: 1 }}
        />
        <Chip
          label="Cancelled"
          onClick={() => setFilter('cancelled')}
          variant={filter === 'cancelled' ? 'filled' : 'outlined'}
          sx={{ mr: 1, mb: 1 }}
        />
      </Box>

      {/* Subscriptions Grid */}
      <Grid container spacing={3}>
        {filteredSubscriptions.map((subscription) => (
          <Grid item xs={12} sm={6} md={4} key={subscription.id}>
            <Card
              sx={{
                height: '100%',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                  <Avatar src={subscription.logo} sx={{ width: 40, height: 40 }}>
                    {subscription.name[0]}
                  </Avatar>
                  <IconButton
                    size="small"
                    onClick={(e) => handleMenuOpen(e, subscription)}
                  >
                    <MoreVert />
                  </IconButton>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {subscription.name}
                </Typography>

                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                  <AttachMoney sx={{ fontSize: 20, color: 'primary.main', mr: 0.5 }} />
                  <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
                    ${subscription.cost}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                    /{subscription.billingCycle}
                  </Typography>
                </Box>

                <Box display="flex" gap={1} sx={{ mb: 2 }}>
                  <Chip
                    label={subscription.category}
                    size="small"
                    sx={{
                      bgcolor: getCategoryColor(subscription.category) + '20',
                      color: getCategoryColor(subscription.category),
                      border: `1px solid ${getCategoryColor(subscription.category)}40`,
                    }}
                  />
                  <Chip
                    label={subscription.status}
                    size="small"
                    color={getStatusColor(subscription.status) as any}
                    variant="outlined"
                  />
                </Box>

                <Typography variant="body2" color="text.secondary">
                  Next billing: {subscription.nextBilling}
                </Typography>

                <Box display="flex" gap={1} sx={{ mt: 2 }}>
                  <Button size="small" startIcon={<Edit />} variant="outlined">
                    Edit
                  </Button>
                  <Button size="small" startIcon={<Notifications />} variant="outlined">
                    Remind
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Edit sx={{ mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          {selectedSubscription?.status === 'active' ? (
            <>
              <Pause sx={{ mr: 1 }} />
              Pause
            </>
          ) : (
            <>
              <PlayArrow sx={{ mr: 1 }} />
              Resume
            </>
          )}
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Notifications sx={{ mr: 1 }} />
          Set Reminder
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          <Delete sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Add Subscription Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Subscription</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subscription Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Cost"
                type="number"
                variant="outlined"
                InputProps={{
                  startAdornment: '$',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Billing Cycle</InputLabel>
                <Select label="Billing Cycle">
                  <MenuItem value="monthly">Monthly</MenuItem>
                  <MenuItem value="yearly">Yearly</MenuItem>
                  <MenuItem value="quarterly">Quarterly</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select label="Category">
                  <MenuItem value="entertainment">Entertainment</MenuItem>
                  <MenuItem value="software">Software</MenuItem>
                  <MenuItem value="productivity">Productivity</MenuItem>
                  <MenuItem value="health">Health</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Next Billing Date"
                type="date"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Website URL"
                variant="outlined"
                placeholder="https://example.com"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch />}
                label="Enable renewal reminders"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Add Subscription
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Subscriptions;
