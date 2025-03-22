import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailJsConfig } from "@/lib/constants";

const formSchema = z.object({
  from_name: z
    .string({ required_error: "Name is required." })
    .min(2, "Name is required.")
    .max(50),
  from_email: z
    .string({ required_error: "Email address is required." })
    .min(1, "Email address is required.")
    .email("Invalid email address."),
  message: z
    .string({ required_error: "Message can't be empty." })
    .min(1, "Message can't be empty."),
});

const Contact = () => {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    if (formRef.current) {
      setIsSending(true);

      emailjs
        .sendForm(
          emailJsConfig.EMAIL_JS_SERVICE_ID,
          emailJsConfig.EMAIL_JS_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: emailJsConfig.EMAIL_JS_PUBLIC_KEY,
          },
        )

        .then(
          () => {
            toast.success("Message received. Good to hear from you!");
            form.reset();
          },
          () => {
            toast.error("Oops! Something went wrong. Try again.");
          },
        )
        .finally(() => setIsSending(false));
    }
  };

  return (
    <>
      <title>Yashil | Contact</title>
      <Heading title="Contact" />

      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="from_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="from_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write something..."
                    {...field}
                    className="resize-y"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="text-primary w-full"
            disabled={isSending}
          >
            {isSending ? (
              <img src="/images/loader.svg" className="animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Contact;
