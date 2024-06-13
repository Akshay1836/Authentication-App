'use client'

import { createContext, useState } from 'react';


export const ThemeContext = createContext({});

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', count, setCount }}>
      {children}
    </ThemeContext.Provider>
  );
}
