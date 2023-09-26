import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';
import { ChildrenProp } from '@interfaces/props/common/ChildrenProp';
import { CustomHTMLProps } from '@interfaces/other/CustomHTMLProps';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import { ArgumentArray } from 'classnames';

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

type ButtonHTMLProps = CustomHTMLProps<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>;

interface SocialButtonProps
  extends CustomClassNameProp,
    DescriptiveButtonProps,
    RoundedButtonProps,
    AerialButtonProps {
  description: string;
  href: string;
  icon: ReactElement;
}

interface PrimaryButtonProps
  extends ButtonHTMLProps,
    CustomClassNameProp,
    Required<ChildrenProp> {}

interface SecondaryButtonProps
  extends ButtonHTMLProps,
    CustomClassNameProp,
    Required<ChildrenProp> {}

interface PurchaseButtonProps {
  buttonCustomClassName?: ArgumentArray;
  iconCustomClassName?: ArgumentArray;
}

export type {
  DescriptiveButtonProps,
  RoundedButtonProps,
  AerialButtonProps,
  SocialButtonProps,
  PrimaryButtonProps,
  SecondaryButtonProps,
  PurchaseButtonProps,
};
