import { useNavigate } from 'react-router-dom';
import ButtonView from '../components/Buttons/ButtonView';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl overflow-hidden p-8 text-center"> 
        {/* 404 Content */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <span className="text-9xl font-bold text-primary">4</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-9xl font-bold text-blue-400">4</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-600">Page Not Found</h2>
          <p className="text-gray-600 text-xs">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back to where you need to be.
          </p>
          
          <div className="pt-4 space-x-4">
            <ButtonView onClick={() => navigate(-1)} label="Go Back" />
            <ButtonView onClick={() => navigate('/')} label="Return Home" />
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Need help? <a href="/contact" className="text-blue-600 hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;