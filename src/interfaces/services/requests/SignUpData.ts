import { SignUpInput } from '@validations/auth.schemas';

export type SignUpData = Omit<SignUpInput, 'passwordConfirmation'>;
