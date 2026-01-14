import styled from 'styled-components';
import { Button } from '@/components/button';
import { NavLink } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase-app/firebase-config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const HeaderStyles = styled.div`
  color: ${(props) => props.theme.white};
  padding: 40px 0;
  border-bottom: 1px solid ${(props) => props.theme.grayf1};

  .header-main {
    display: flex;
    align-items: center;
  }

  .logo {
    display: block;
    max-width: 50px;
  }

  .menu {
    display: flex;
    align-items: center;
    margin-left: 40px;
    gap: 20px;
    list-style: none;
    font-weight: 500;
  }

  .search {
    margin-left: auto;
    padding: 15px 25px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
    height: 56px;
  }

  .search-input {
    flex: 1;
    padding-right: 45px;
  }

  .search-input:focus {
    outline: none;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
  }
`;

const menuLinks = [
  {
    id: 1,
    url: '/home',
    title: 'Home',
  },
  {
    id: 2,
    url: '/blog',
    title: 'Blog',
  },
  {
    id: 3,
    url: '/contact',
    title: 'Contact',
  },
];

const getLastName = (name) => {
  if (!name) return '';
  const length = name.split(' ').length;
  return name.split(' ')[length - 1];
};

const Header = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut(auth);
    toast.success('Sign out successfully');
    navigate('/sign-in');
  };

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <NavLink to={'/'}>
            <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo" />
          </NavLink>
          <ul className="menu">
            {menuLinks.map((link) => (
              <li key={link.id} className="menu-item">
                <NavLink to={link.url} className="menu-link">
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="search">
            <input type="text" placeholder="Search post ..." className="search-input" />
            <span className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          {!userInfo?.email ? (
            <Button width="100px" height="56px" to="/sign-up">
              Sign Up
            </Button>
          ) : (
            <div className="header-auth">
              <strong>Welcome, </strong>
              <span className="text-primary">{getLastName(userInfo?.displayName)}</span>
              <Button width="100px" height="56px" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
