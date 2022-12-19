import { useQuery } from '@tanstack/react-query';
import './index.css';
import { getColors } from './client/client';
import { ColorCard } from './components/ColorList/ColorsCard';
import { Header } from './components/Header/Header';
import { ChangeEvent, useCallback, useState } from 'react';
import { Color } from './types/color';
import { debounce } from 'debounce';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ColorList } from './components/ColorList/ColorList';

function App() {
  const { data, isLoading } = useQuery(['colors'], () => getColors(1, 12));
  const [filter, setFilter] = useState<string>('');
  const colorsFilter = (colors: Color[], f: string) => {
    return colors.filter((color) => {
      return color.hex.includes(f);
    });
  };

  const handleInput = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      if (event.target) {
        setFilter(event.target.value);
      }
    }, 500),
    []
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex h-[86vh]">
        <Sidebar />
        {data && <ColorList colors={colorsFilter(data, filter)} />}
      </div>
    </div>
  );
}

export default App;
