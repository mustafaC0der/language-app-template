import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Language Learning Website</h1>
            <p>Start your journey to learn a new language today!</p>
            <nav>
                <ul>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/resources">Resources</a></li>
                    <li><a href="/community">Community</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;