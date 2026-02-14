import { Link } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '../ui/breadcrumb';

interface props {
  currentPage: string;
  breadcrumbs: {
    label: string;
    href: string;
  }[];
}

export const CustomBreadcrumb = ({ currentPage, breadcrumbs }: props) => {
  return (
    <Breadcrumb className="my-4">
      <BreadcrumbList>
        {[{ label: 'Home', href: '/' }, ...breadcrumbs].map((breadcrumb) => (
          <BreadcrumbItem key={breadcrumb.href}>
            <BreadcrumbLink asChild>
              <Link to={breadcrumb.href}>{breadcrumb.label}</Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
