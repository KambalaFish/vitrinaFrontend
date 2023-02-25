import { ClassNameProp } from '@interfaces/props/ClassNameProp';
import { To } from 'react-router-dom';
export interface LogoProps extends ClassNameProp {
  to?: To;
}
