import { InferType, object, setLocale, string, ref } from 'yup';

setLocale({
  mixed: {
    required: 'Данное поле обязательно для заполнения.',
  },
});
const signUpSchema = object({
  name: string()
    .required()
    .min(2, 'Имя должно иметь как минимум ${min} символа.')
    .matches(
      /^(?!.*\s{2,})(?:\S+\s*)*$/,
      'Имя может содержать только один пробел между словами.'
    )
    .matches(
      /^(?!.*[А-ЯA-Z]{2,})(?!.*[а-яa-z]+[А-ЯA-Z])(?:\S+\s*)*$/,
      'Заглавная буква может быть только в начале слова.'
    )
    .matches(
      /^(?!.*[^а-яА-Яa-zA-Z\s])(?:\S+\s*)*$/,
      'Имя может включать только буквенные символы и пробел.'
    )
    .trim(),
  email: string()
    .required()
    .matches(
      /^[a-zA-z0-9]{1}(?:\.?[a-zA-z0-9]+)*@(?:[a-zA-z]+\.){1,3}[a-zA-z]+$/,
      `Введите корректный email.`
    )
    .trim(),
  password: string()
    .required()
    .matches(
      /^(?!.*[^a-zA-Z0-9])(?:\S+\s*)*$/,
      'Пароль может включать только латинские буквы и цифры.'
    )
    .matches(
      /^(?=.*[a-z])(?:\S+\s*)*$/,
      'Пароль должен включать хотя бы одну маленькую букву.'
    )
    .matches(
      /^(?=.*[A-Z])(?:\S+\s*)*$/,
      'Пароль должен включать хотя бы одну большую букву.'
    )
    .matches(/^(?=.*[0-9])(?:\S+\s*)*$/, 'Пароль должен включать хотя бы одну цифру.')
    .min(6, 'Пароль должен иметь как минимум ${min} символов.')
    .max(14, 'Пароль может иметь максимум ${max} символов.')
    .trim(),
  passwordConfirmation: string()
    .required(`Введите пароль повторно для подтверждения.`)
    .oneOf([ref('password')], `Пароли не совпадают.`)
    .trim(),
});

type SignUpInput = InferType<typeof signUpSchema>;

const signInSchema = signUpSchema.pick(['email', 'password']);
type SignInInput = InferType<typeof signInSchema>;

export { signUpSchema, signInSchema };
export type { SignUpInput, SignInInput };
