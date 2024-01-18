import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { GlobalStyles } from './styles/global.ts';
import { Routes } from './routes/index.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Providers } from './context/providers.tsx';

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60, // 1 minute
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Providers>
          <Routes />
        </Providers>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
