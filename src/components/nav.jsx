import MenuIcon from '@mui/icons-material/Menu';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsIcon from '@mui/icons-material/Apps';
export default function Nav() {
    return(
        <>
            <nav className="fixed top-0 left-0 z-50 max-sm:w-100 bg-white h-15 w-full  flex justify-between items-center px-4">
                <div className=' flex  items-center'>
                    <MenuIcon className="lg:hidden h-10 m-4" />
                    <img className='h-8' src='logo.png'></img>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <WbSunnySharpIcon sx={{ color: '#EA8F33' }}/>
                    <SearchSharpIcon sx={{ color: '#666970' }}/>
                    <NotificationsNoneOutlinedIcon sx={{ color: '#666970' }}/>
                    <AppsIcon sx={{ color: '#666970' }}/>
                    <div>
                        <img src='prof.png' className='h-8 rounded-full m-2'></img>
                    </div>
                </div>
            </nav>

        </>
    )
}