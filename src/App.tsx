import './App.scss';
import { defaultOptions } from './ReactQuery/config';
import MainRouter from './Routers';
import "antd/dist/antd.min.css";
import {QueryClient, QueryClientProvider,} from 'react-query'


function App() {

    const queryClient = new QueryClient({
        defaultOptions
    })
    return (

        <div className="App">
            {/* react query */}
            <QueryClientProvider client={queryClient}>
              
                    <MainRouter>
                      
                    </MainRouter>

            </QueryClientProvider>
        </div>
    );
}

export default App;
