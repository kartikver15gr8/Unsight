import RegisterCredentialsForm from "@/components/auth/registerWithCred";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const RegisterPage = async () => {
  const session = await auth();

  return <div>{session ? redirect("/") : <RegisterCredentialsForm />}</div>;
};

export default RegisterPage;
