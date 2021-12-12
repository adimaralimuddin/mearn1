
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainNav from './layouts/MainNav'
import useRoute from './routes/Router'

export default function App() {
  const site = useRoute();

  

  return (
    <BrowserRouter>
      <div>
        <MainNav></MainNav>
        <div>
          <Routes>
            <Route {...site.feed.main} />
            <Route {...site.chat.main} />
            <Route {...site.profile.main} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}