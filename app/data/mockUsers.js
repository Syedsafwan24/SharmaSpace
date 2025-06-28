// Mock user data for authentication
export const mockUsers = [
  {
    id: '1',
    email: 'admin@sharmaspace.in',
    password: 'admin123', // In real app, this would be hashed
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: '2',
    email: 'demo@sharmaspace.in',
    password: 'demo123',
    name: 'Demo User',
    role: 'user'
  }
];

// Mock authentication functions
export const authenticateUser = (email, password) => {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
};

export const createUser = (email, name, password) => {
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const newUser = {
    id: Date.now().toString(),
    email,
    name,
    password,
    role: 'user'
  };

  mockUsers.push(newUser);
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};