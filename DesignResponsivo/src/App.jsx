import { useEffect, useState } from 'react';
import Mobile from './components/Mobile.jsx';
import PC from './components/PC.jsx';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(isMobile)
    return <Mobile/>;
  
  return <PC/>;
}

export default App;
