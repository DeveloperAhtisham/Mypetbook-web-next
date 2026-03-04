import { Heart } from 'lucide-react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const Loader = ({ size = 'md', message = 'Loading...' }: LoaderProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Spinning outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-muted rounded-full border-t-primary loader-spin`}></div>
        
        {/* Paw print in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full gentle-pulse"></div>
        </div>
      </div>
      
      {message && (
        <p className="mt-4 text-sm text-muted-foreground font-medium">{message}</p>
      )}
      
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-1/4 left-1/4 w-3 h-3 text-pet-orange/20 float-animation" />
        <Heart className="absolute top-1/3 right-1/3 w-2 h-2 text-pet-blue/20 float-animation" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-1/3 left-1/2 w-4 h-4 text-pet-green/20 float-animation" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Loader;