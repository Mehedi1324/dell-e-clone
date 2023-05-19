import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[63px]  backdrop-blur-sm backdrop-brightness-50 items-center flex justify-between px-4">
      <img
        onClick={() => navigate('/')}
        className="cursor-pointer w-28"
        src="/assets/logo.svg"
        alt="logo"
      />
      <button
        onClick={() => navigate('/create-post')}
        className="px-2 py-1 text-white bg-blue-600 rounded-md cursor-pointer hover:bg-slate-700 shadow-btn"
      >
        Create
      </button>
    </div>
  );
};

export default Header;
