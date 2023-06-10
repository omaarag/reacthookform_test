export const inputsInfo = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'John Doe',
    validations: {
      required: true,
      minLength: 3
    },
    errorMessage: 'Must have at least 3 characters'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'john_doe@example.com',
    validations: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    errorMessage: 'Must be a valid email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: '',
    validations: {
      required: true,
      pattern: /^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    },
    errorMessage: 'Must have at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character'
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    placeholder: '',
    validations: {
      required: true,
      validate: value => value === document.querySelector('[name="password"]').value
    },
    errorMessage: 'Passwords must match'
  },
  {
    name: 'birthday',
    type: 'date',
    label: 'Birthday',
    placeholder: '',
    validations: {
      required: true,
      validate: value => new Date(value) < new Date()
    },
    errorMessage: 'Invalid birth date'
  }
]
