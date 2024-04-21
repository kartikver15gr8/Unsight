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

const SignInForm = () => {
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
    <section className="flex flex-col space-y-6 items-center justify-center h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Card className="w-[500px] shadow-lg">
        <CardHeader>
          <h2 className=" text-lg font-bold">Email Provider Authentication</h2>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sign in with your email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="johndoe@gmail.com" />
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
                Continue with email
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignInForm;
