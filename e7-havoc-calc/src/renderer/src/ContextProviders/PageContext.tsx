import { useState, createContext, useContext } from 'react';

type PageContextType = {
    page: string,
    setPage: (page: string) => void 
}

export const PageContext = createContext<PageContextType | null>(null);

const PageCtx = ({ children }) => {
  const [page, setPage] = useState<string>('scout'); // Initialize with 'scout'
  
  return <PageContext.Provider value={{ page, setPage }}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  
  if (!context) {
    throw new Error('usePageContext must be used inside the PageProvider');
  }
  
  return context;
};

export default PageCtx;