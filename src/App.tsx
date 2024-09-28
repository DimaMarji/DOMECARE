import { Provider } from 'react-redux';
import './App.scss';
import { defaultOptions } from './ReactQuery/config';
import { store } from './Redux/store';
import MainRouter from './Routers';
import "antd/dist/antd.min.css";
import {QueryClient, QueryClientProvider,} from 'react-query'


function App() {

    const queryClient = new QueryClient({
        defaultOptions
    })
    return (

        <div className="App">
              <Provider store={store}>
            {/* react query */}
            <QueryClientProvider client={queryClient}>
              
                    <MainRouter>
                      
                    </MainRouter>

            </QueryClientProvider>
            </Provider>
        </div>
    );
}

export default App;
