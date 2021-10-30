//import logo from './logo.svg';
import './App.css';

import user from './data/user.json';
import Profile from './components/Profile';

import statisticalData from './data/statistical-data.json';
import Statistics from './components/Statistic/Statistics';

function App() {
  return (
    <div className="App">
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics
          stats={statisticalData}
        />
      </div>
    </div>
  );
}

export default App;
