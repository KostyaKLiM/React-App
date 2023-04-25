import LogoIcon from '../icons/logoicon';
import'./Header.scss';

function Header() {
  return (
   <>
<div className='logo'>
  <LogoIcon/>
  <div className='Logo_text'>PNFT Market</div>
</div>
   </>
  );
}

export default Header;
