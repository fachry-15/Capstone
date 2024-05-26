function Register() {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"></input>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"></input>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"></input>
            </div>
            <div>
                <button type="submit" className="w-full font-bold bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Masuk</button>
            </div>
        </form>
    );
}

export default Register;