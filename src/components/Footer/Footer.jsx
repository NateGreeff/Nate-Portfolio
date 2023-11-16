import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <footer>
            <div className='background'>
                <LinkedInIcon className='icon' />
                <GitHubIcon className='icon' />
                <TwitterIcon className='icon' />
            </div>
        </footer>
    )
}