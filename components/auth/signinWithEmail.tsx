"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import Link from "next/link";

export default function SignInForm() {
  const [success, setSuccess] = useState("");

  // Define your form
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    login(values).then((data) => {
      setSuccess(data.success);
    });
  };

  return (
    <div className="w-full flex ">
      <div className="w-[50%] bg-black min-h-screen p-8">
        <Link href="/">
          <div className="flex items-center ">
            <img
              className="w-16 mr-2"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 72 72'%3E%3Ccircle cx='36' cy='36' r='28' fill='%23023262'/%3E%3Ccircle r='18' fill='%231F72AF' transform='matrix(-1 0 0 1 36 36)'/%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='10' d='M54.125 36c0-2.118-.363-4.152-1.031-6.042c-2.489-7.04-9.202-12.083-17.094-12.083'/%3E%3Ccircle cx='36' cy='36' r='10' fill='%2399FCFF'/%3E%3Ccircle cx='36' cy='36' r='5' fill='%231F305E'/%3E%3Ccircle cx='36' cy='36' r='28' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="font-bold text-6xl bg-gradient-to-r from-[#023262] via-[#1F72AF] to-blue-500 text-transparent inline-block bg-clip-text">
              Unsight
            </p>
          </div>
        </Link>
        <div className="w-[80%] mt-48 mx-4">
          <h1 className="text-7xl mb-10 text-blue-700">Welcome to Unsight</h1>
          <p className="text-slate-500">
            A platform where you can freely share your thoughts all across the
            world, without revealing your identity
          </p>
        </div>
      </div>
      <div className="w-[50%] min-h-screen flex justify-center items-center bg-slate-300">
        <Card className="w-[500px] h-[400px] shadow-xl shadow-slate-600">
          <CardHeader>
            <h2 className=" text-xl font-bold mb-6">
              Email Provider Authentication
            </h2>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sign in with your student email id</FormLabel>
                      <FormControl>
                        <Input
                          className="h-16 text-lg"
                          {...field}
                          placeholder="johndoe@mitsgwl.ac.in"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {success && (
                  <p className="bg-green-500/20 rounded-lg text-green-500 w-full p-2.5">
                    {success}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full h-14 hover:bg-slate-600 transition-all duration-300"
                >
                  Continue with email
                </Button>
              </form>
            </Form>
            <Link href="/register">
              <p className="p-4 justify-end w-[100%] hover:text-blue-500 flex">
                Create an account?
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
