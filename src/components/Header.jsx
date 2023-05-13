import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[63px] bg-white items-center flex justify-between px-4">
      <img
        onClick={() => navigate('/')}
        className="cursor-pointer w-28"
        src="/assets/logo.svg"
        alt="logo"
      />
      <button
        onClick={() => navigate('/create-post')}
        className="px-2 py-1 text-white bg-blue-500 rounded-sm cursor-pointer"
      >
        Create
      </button>
    </div>
  );
};

export default Header;
