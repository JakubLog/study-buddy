import { useEffect, useState } from 'react';

const actualWindowSize = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const useWindowSize = () => {
  const [dismount, setDismount] = useState(actualWindowSize);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setDismount({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
    return () => window.removeEventListener('resize', setDismount);
  }, []);

  return dismount;
};
