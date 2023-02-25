import { ClassNameProp } from '@interfaces/props/ClassNameProp';

interface DescriptiveButtonProps {
  title: string;
  description?: string;
}

interface RoundedButtonProps {
  isRounded?: boolean;
}

interface AerialButtonProps {
  isAerial?: boolean;
}

interface SocialButtonProps
  extends ClassNameProp,
    DescriptiveButtonProps,
    RoundedButtonProps,
    AerialButtonProps {
  description: string;
  href: string;
  icon: React.ReactElement;
}

export type {
  DescriptiveButtonProps,
  RoundedButtonProps,
  AerialButtonProps,
  SocialButtonProps,
};
