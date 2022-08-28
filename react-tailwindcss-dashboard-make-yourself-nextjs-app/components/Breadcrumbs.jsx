import Link from 'next/link';
import {Children} from 'react';
import {useBreadcrumb} from '../hooks/useBreadcrumb';

const Breadcrumb = ({children, className}) => {
  const childrenArray = Children.toArray(children);

  console.log(childrenArray);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <span key={index} className={`flex items-center gap-2`}>
          {child}
          <span>/</span>
        </span>
      );
    }
    return child;
  });

  return (
    <nav className={className}>
      <ol className="flex items-center gap-2">{childrenWtihSeperator}</ol>
    </nav>
  );
};

const BreadcrumbItem = ({children, href, ...props}) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const Breadcrumbs = ({className}) => {
  const {breadcrumbs} = useBreadcrumb();
  return (
    <Breadcrumb className={className}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
