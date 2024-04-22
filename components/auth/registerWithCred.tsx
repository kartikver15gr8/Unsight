"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RegisterSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import { register } from "@/actions/register";
import SideSection from "./sideSection";

const RegisterCredentialsForm = () => {
  const [success, setSuccess] = useState("");

  // Define your form
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    register(values).then((data) => {
      //   setSuccess(data?.success);
      console.log(data);
    });
  };

  return (
    <div className="w-full flex ">
      <SideSection />
      <div className="w-[50%] min-h-screen flex justify-center items-center bg-slate-300">
        <Card className="w-[500px] shadow-lg">
          <CardHeader>
            <h2 className=" text-lg font-bold">Register With Credentials</h2>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="johndoe@gmail.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="******"
                          type="password"
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
                <Button type="submit" className="w-full">
                  Send Confirmation Email
                </Button>
              </form>
            </Form>
            <Link href="/signIn">
              <p className="p-4 justify-end w-[100%] hover:text-blue-500 flex">
                Login
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterCredentialsForm;
