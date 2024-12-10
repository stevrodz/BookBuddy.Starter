import { useLoginUserMutation } from '../api/authApi';

const Login = () => {
  const [loginUser] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      const user = await loginUser(credentials).unwrap();
      console.log('Logged in:', user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
