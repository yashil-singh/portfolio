import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import socialLinks from "@/assets/data/socialLinks.ts";
import Header from "@/components/Header.tsx";
import MobileNavBar from "@/components/MobileNavbar.tsx";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp, Download } from "lucide-react";
import SocialLink from "./SocialLink";
import resume from "@/assets/Yashil Lal Singh - CV.pdf";

const RootLayout = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(true);

  return (
    <>
      <main className="relative backdrop-blur-[100px] md:backdrop-blur-[200px]">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-start gap-4 px-4 pt-4 lg:flex-row lg:pt-8">
          <motion.div
            className="bg-card top-5 mt-8 flex w-full flex-col items-center gap-6 rounded-xl border p-8 lg:sticky lg:max-w-[350px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <div className="relative flex w-full flex-col items-center gap-5 text-center sm:flex-row sm:items-start lg:flex-col lg:items-center">
              <Button
                className="absolute -top-4 -right-4 rounded-full"
                variant="ghost"
                size="icon"
                onClick={() => setIsInfoOpen(!isInfoOpen)}
              >
                <motion.span
                  animate={{ rotate: isInfoOpen ? 0 : 180 }}
                  transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
                  }}
                >
                  <ChevronUp className="size-6" />
                </motion.span>
              </Button>

              <img
                src="/images/me.png"
                alt="me"
                className="size-40 rounded-xl object-cover"
              />
              <div className="flex flex-col gap-2">
                <span className="text-left font-bold sm:text-xl lg:text-center">
                  Yashil Lal Singh
                </span>
                <span className="bg-secondary text-primary rounded-xl px-4 py-2 text-xs font-medium sm:text-sm">
                  Full Stack Developer
                </span>
              </div>
            </div>

            <AnimatePresence>
              {isInfoOpen && (
                <motion.div
                  className="flex w-full flex-col gap-4 overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ type: "spring", duration: 0.2, bounce: 0 }}
                >
                  <div className="bg-border h-0.5 w-full rounded-full"></div>

                  {socialLinks.map((social) => (
                    <SocialLink data={social} />
                  ))}

                  <div className="bg-border h-0.5 w-full rounded-full"></div>

                  <Button variant="secondary" size="lg" asChild>
                    <a
                      href={resume}
                      download="Yashil Lal Singh - CV"
                      target="_blank"
                    >
                      <Download /> Download Resume
                    </a>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="bg-card relative flex min-h-[calc(100vh-290px)] w-full flex-col gap-8 overflow-hidden rounded-t-xl border p-8 pb-24 max-md:rounded-b-xl lg:min-h-[calc(100vh-32px)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <Header />

            <Outlet />
          </motion.div>
        </div>

        <MobileNavBar />
      </main>

      <Toaster
        closeButton
        position="top-right"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "flex bg-card border min-h-14! px-4 rounded-xl gap-2 items-center shadow-sm relative",
            title: "font-semibold text-sm text-foreground!",
            description: "text-sm text-muted-foreground",
            success: "text-green-500",
            info: "text-blue-500",
            error: "text-destructive",
            warning: "text-orange-500",
            closeButton:
              "absolute -top-1 -right-1 text-foreground bg-card border rounded-full cursor-pointer p-1",
          },
        }}
      />

      <div className="from-primary via-primary to-background fixed -top-[5%] left-[5%] -z-10 size-[300px] rounded-full bg-radial opacity-50 blur-3xl md:-top-[10%] md:left-[10%] md:size-[400px]"></div>
      <div className="from-primary via-primary to-background fixed right-[5%] -bottom-[5%] -z-10 size-[300px] rounded-full bg-radial opacity-50 blur-3xl md:right-[10%] md:-bottom-[10%] md:size-[400px]"></div>
    </>
  );
};

export default RootLayout;
