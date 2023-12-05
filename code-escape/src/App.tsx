import React from 'react';
import SignUpForm from './components/SignUpForm';

const App: React.FC = () => {
  return (
    <div>
        <div className="navbar-wrapper py-3 mt-5">
            <nav className='navbar flex items-center'>
                <div className="navbar-inner flex justify-evenly items-center font-bold py-1">
                    <a href="/">Home</a>
                    <a href="/games">Games</a>
                    <a href="/game-assests">Game Assets</a>
                    <a href="/game-jam">Game Jam</a>
                    <a href="/signup">Sign Up</a>
                </div>
            </nav>
        </div>
        {window.location.pathname === '/signup' ? <SignUpForm /> : null}
    </div>
  );
};

export default App;
