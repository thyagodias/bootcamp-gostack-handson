interface CreateUserData {
  name?: String // opcional
  email: String
  password: String
}

export default function createUser ({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user
}
