import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login - same credentials as Magnus
        if (email === 'training@jalaacademy.com' && password === 'jobprogram') {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials! Use: training@jalaacademy.com / jobprogram');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Magnus Login</h2>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="training@jalaacademy.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="jobprogram"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-6 text-sm">
                    Demo Credentials:<br />
                    training@jalaacademy.com / jobprogram
                </p>
            </div>
        </div>
    );
}

export default Login;
