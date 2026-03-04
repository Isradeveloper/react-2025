import { Card, CardContent } from '@/core/ui/shadcn/components/card';
import { Outlet } from 'react-router';
import placeholderImage from '@/assets/placeholder.svg';

const AuthLayout = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={'flex flex-col gap-6'}>
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <Outlet />
              <div className="relative hidden bg-muted md:block">
                <img
                  src={placeholderImage}
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            Haciendo click, estás de acuerdo con{' '}
            <a href="#">términos y condiciones</a> y{' '}
            <a href="#">políticas de uso</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
