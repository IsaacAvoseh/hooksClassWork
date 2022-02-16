import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './component/Card';
import Card1 from './component/Card1';
import Contact from './pages/Contact';
import Notes from './pages/Notes';
import TodoList from './pages/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InvoiceList from './pages/InvoiceList';
import Invoice from './component/Invoice';
import PreviewInvoice from './pages/PreviewInvoice';
import InvoiceEdit from './project4/InvoiceEdit';
import InvoiceAdd from './project4/InvoiceAdd';
import List from './project4/List';
import Blogs from './pages/Blog/Blogs';
import BlogView from './pages/Blog/BlogView';
import MailBox from './pages/Mail/MailBox';
import Redux from './pages/Redux';
import Weather from './pages/Weather';
import Profile from './pages/Profile';
import ProfileView from './pages/ProfileView';
import WeatherContextProvider from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>

      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path='/contacts' element={<Contact/>} ></Route>
        <Route path='/notes' element={<Notes/>} ></Route>
        <Route path='/todo' element={<TodoList/>}/>
          <Route path="invoiceedit" element={<InvoiceEdit />} />
          <Route path="invoice" element={<InvoiceAdd />} />
          <Route path="/invoicelist" element={<List />} />
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="blog/:id" element={<BlogView/>}/>
          <Route path="/mail" element={<MailBox/>}/>
          <Route path='/redux' element={<Redux/>}/>
          <Route path='/' element={< Weather />}/>
          <Route path='/profilesetting' element={<Profile/>}/>
          <Route path='/profile' element={<ProfileView/>}/>
          
        {/* <Route path='/' element={<InvoiceList/>}/>
        <Route path='/addinvoice' element={<Invoice/>}/>
        <Route path='/editinvoice/:id' element={<Invoice/>}/>
        <Route path='/preview' element={<PreviewInvoice/>}/> */}
      </Routes>
      </BrowserRouter>
       </WeatherContextProvider>

    </div>
  );
}

export default App;
