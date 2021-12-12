

import { Link } from 'react-router-dom'
import Avatar1 from '../components/Avatar1'
import useRoute from '../routes/Router'
export default function MainNav() {
    const site = useRoute()
    return (
        <div className='flxBetween plr20 p10 bb white itemCenter' >
            <div>
                <h1>mearn1</h1>
            </div>
            <div >
                <ul className='flx noStyle itemCenter'>
                    {/* <li className='mlr5'>
                        <Link to={site.home.main.path}>home</Link>
                    </li> */}
                    <li className='mlr5'>
                        <Link to={site.feed.main.path}>feed</Link>
                    </li>
                    <li className='mlr5'>
                        <Link to={site.chat.main.path}>chat</Link>
                    </li>
                    <li className='mlr5'>
                        <Link to={site.profile.main.path}>profile</Link>
                    </li>
                    <div className='mlr10'>
                    <Avatar1></Avatar1>
                    </div>
                </ul>
            </div>
        </div>
    )
}