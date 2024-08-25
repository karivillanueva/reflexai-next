import Link from 'next/link';
import BaseButtonContent from './BaseButtonContent';

type LinkButtonType = {
  href: string;
  title: string;
  subtitle: string;
};

const LinkButton = ({ href, title, subtitle }: LinkButtonType) => {
  return (
    <Link href={href}>
      <BaseButtonContent title={title} subtitle={subtitle} />
    </Link>
  );
};

export default LinkButton;
