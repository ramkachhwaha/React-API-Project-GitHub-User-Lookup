import { useState } from "react";
import GithubFinderUI from "./pages/GitHubFinderUI";

function App() {
    // 1. Alag-alag state bna li 
    const [username, setUsername] = useState(""); // Input field ke liye
    const [userData, setUserData] = useState(null); // API se aaye data ke liye
    const [loading, setLoading] = useState(false); // Shuru mein loading false rahegi
    const [error, setError] = useState(null); /// errorr  ke liye 

    // 2. API call ke liye ek function banayein jo form submit par chalega
    const handleSubmit = async (e) => {
        e.preventDefault(); // Page ka reload hone se roke diya 

        if (!username) {
            alert("Please Enter a Github Username");
            return;
        }

        setLoading(true);
        setError(null);
        setUserData(); // Purane data ko clear karein

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error('User not found or network error');
            }
            const data = await response.json();
            setUserData(data); // Sahi data ko state mein save karein
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen m-3 ">
                <div>
                    {/* 3. Input aur button ko ek form mein daalein */}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                className="w-auto px-3 mx-4 my-7 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your GitHub username"
                                value={username} // Input ko 'username' state se jodein
                                onChange={(e) => setUsername(e.target.value)} // 'username' state ko update karein
                            />
                            <button type="submit" className="rounded px-3 py-1 bg-green-600 text-white shrink-0">
                                Search
                            </button>
                        </div>
                    </form>

                    {/* 4. Conditional Rendering */}
                    {loading && <div>Loading...</div>}
                    {error && <div className="text-red-500">Error: {error}</div>}
                    {userData && <GithubFinderUI userData={userData} />} {/* userData pass karein, posts nahi */}
                </div>
            </div>
        </>
    );
}

export default App;