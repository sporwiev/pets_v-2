import {Routes, Route} from "react-router-dom";
import Header from "./companents/header";
import Footer from "./companents/footer";
import Main from "./pages/main";
import Profile from "./pages/profile";
import Registration from "./pages/registration";
import Auth from "./pages/auth";
import AddPet from "./pages/add_pet";
import EditPet from "./pages/edit_pet";
import Search from "./pages/search";
import SearchResult from "./pages/searchResult";
import Pet from "./pages/pet";
import useToken from "./companents/useToken";


function App() {
    const {token, setToken} = useToken();
    return (
        <div className="App">
            <Header token={token} setToken={setToken}/>
            <main style={{'minHeight': '70vh'}}>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/signup'} element={<Registration/>}/>
                    <Route path={'/login'} element={<Auth setToken={setToken}/>}/>
                    <Route path={'/profile'} element={<Profile token={token}/>}/>
                    <Route path={'/pet/:pet_id'} element={<Pet/>}/>
                    <Route path={'/new_pet'} element={<AddPet token={token}/>}/>
                    <Route path={'/edit_pet/:pet_id'} element={<EditPet token={token}/>}/>
                    <Route path={'/search/order'} element={<Search/>}/>
                    <Route path={'/search'} element={<SearchResult/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
