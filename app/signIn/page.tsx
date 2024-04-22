import SignInForm from "@/components/auth/signinWithEmail";
import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const SignInPage = async () => {
  const session = await auth();

  return <div>{session ? redirect("/") : <SignInForm />}</div>;
};

export default SignInPage;
