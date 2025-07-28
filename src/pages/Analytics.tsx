import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from 'recharts';

// Sample data for analytics
const monthlySpending = [
  { month: 'Jan', amount: 45.99, subscriptions: 8 },
  { month: 'Feb', amount: 52.47, subscriptions: 9 },
  { month: 'Mar', amount: 48.99, subscriptions: 9 },
  { month: 'Apr', amount: 67.98, subscriptions: 11 },
  { month: 'May', amount: 71.97, subscriptions: 12 },
  { month: 'Jun', amount: 69.98, subscriptions: 12 },
];

const categorySpending = [
  { category: 'Entertainment', amount: 35.98, color: '#6366f1' },
  { category: 'Software', amount: 28.50, color: '#10b981' },
  { category: 'Productivity', amount: 15.99, color: '#f59e0b' },
  { category: 'Health', amount: 12.99, color: '#ef4444' },
  { category: 'Finance', amount: 9.99, color: '#8b5cf6' },
];

const yearlyComparison = [
  { year: '2023', amount: 720.50 },
  { year: '2024', amount: 840.75 },
  { year: '2025', amount: 950.25 },
];

const subscriptionGrowth = [
  { month: 'Jan', count: 8 },
  { month: 'Feb', count: 9 },
  { month: 'Mar', count: 9 },
  { month: 'Apr', count: 11 },
  { month: 'May', count: 12 },
  { month: 'Jun', count: 12 },
];

const Analytics: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Analytics
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Detailed insights into your subscription spending patterns
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Monthly Spending Trend */}
        <Grid item xs={12} lg={8}>
          <Card sx={{ height: 400 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Spending Trend
              </Typography>
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={monthlySpending}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                  <XAxis dataKey="month" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid rgba(100, 116, 139, 0.2)',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#6366f1"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorAmount)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Category Spending */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ height: 400 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Spending by Category
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categorySpending}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="amount"
                  >
                    {categorySpending.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`$${value}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid rgba(100, 116, 139, 0.2)',
                      borderRadius: '8px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <Box sx={{ mt: 2 }}>
                {categorySpending.map((category) => (
                  <Box key={category.category} display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Box display="flex" alignItems="center">
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: category.color,
                          mr: 1,
                        }}
                      />
                      <Typography variant="body2">
                        {category.category}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      ${category.amount}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Yearly Comparison */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 350 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Yearly Spending Comparison
              </Typography>
              <ResponsiveContainer width="100%" height={270}>
                <BarChart data={yearlyComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                  <XAxis dataKey="year" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid rgba(100, 116, 139, 0.2)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar
                    dataKey="amount"
                    fill="url(#colorGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.9} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Subscription Growth */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 350 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Subscription Count Growth
              </Typography>
              <ResponsiveContainer width="100%" height={270}>
                <LineChart data={subscriptionGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                  <XAxis dataKey="month" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid rgba(100, 116, 139, 0.2)',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Key Insights */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Key Insights
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>
                      +24%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Spending increase compared to last year
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.2)',
                    }}
                  >
                    <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 700, mb: 1 }}>
                      4
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      New subscriptions added this year
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                    }}
                  >
                    <Typography variant="h4" color="success.main" sx={{ fontWeight: 700, mb: 1 }}>
                      $180
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Potential savings by optimizing subscriptions
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analytics;
