import { Search } from 'lucide-react';
import { Button } from '@/core/ui/shadcn/components/button';
import { Input } from '@/core/ui/shadcn/components/input';
import { useRef } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { cn } from '@/core/infrastructure/lib/utils';
import { CustomLogo } from '@/core/ui/components/CustomLogo';
export const CustomHeader = () => {
  const { gender } = useParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newSearchParams = new URLSearchParams();

      newSearchParams.set('search', inputRef.current?.value || '');
      newSearchParams.set('page', '1');

      setSearchParams(newSearchParams);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <CustomLogo />

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                !gender ? 'underline underline-offset-10 decoration-2' : ''
              )}>
              Todos
            </Link>
            <Link
              to="/gender/men"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                gender === 'men'
                  ? 'underline underline-offset-10 decoration-2'
                  : ''
              )}>
              Hombres
            </Link>
            <Link
              to="/gender/women"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                gender === 'women'
                  ? 'underline underline-offset-10 decoration-2'
                  : ''
              )}>
              Mujeres
            </Link>
            <Link
              to="/gender/kids"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                gender === 'kids'
                  ? 'underline underline-offset-10 decoration-2'
                  : ''
              )}>
              Niños
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  defaultValue={search}
                  placeholder="Buscar productos..."
                  className="pl-9 w-64 h-9"
                  onKeyDown={handleSearch}
                />
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button
                variant="default"
                size="sm"
                className="ml-2">
                Login
              </Button>
            </Link>
            <Link to="/admin">
              <Button
                variant="destructive"
                size="sm"
                className="ml-2">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
