
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import {Provider} from 'react-redux'
import { store } from './store/store';


createRoot(document.getElementById('root')).render(
   <Provider store={store}>
<BrowserRouter>
 <App />
 <ToastContainer position='top-center' autoClose={500}/>
</BrowserRouter>
   </Provider>

  

   
  
)
