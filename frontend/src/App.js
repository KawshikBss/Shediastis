import Container from "./components/Container";
import {
  QueryClientProvider, QueryClient
} from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <div className="App">
        <Container />
      </div>
    </QueryClientProvider>
  );
}

export default App;
