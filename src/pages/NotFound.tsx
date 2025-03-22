import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <main className="relative backdrop-blur-[100px] md:backdrop-blur-[200px]">
        <div className="mx-auto flex h-screen max-w-4xl flex-col items-center justify-center gap-8 p-4 md:flex-row md:gap-14">
          <img
            src="/images/404.svg"
            className="aspect-square w-full max-w-[450px]"
          />

          <div className="space-y-6">
            <h1 className="text-foreground text-center text-4xl font-black md:text-left md:text-6xl">
              Oops!
            </h1>

            <h1 className="text-muted-foreground text-center text-lg font-bold md:text-left md:text-2xl">
              We couldn't find the page you were looking for
            </h1>

            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-fit"
              asChild
            >
              <Link to="/">
                <ArrowLeft />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <div className="from-primary via-primary to-background fixed -top-[5%] left-[5%] -z-10 size-[300px] rounded-full bg-radial opacity-50 blur-3xl md:-top-[10%] md:left-[10%] md:size-[400px]"></div>
      <div className="from-primary via-primary to-background fixed right-[5%] -bottom-[5%] -z-10 size-[300px] rounded-full bg-radial opacity-50 blur-3xl md:right-[10%] md:-bottom-[10%] md:size-[400px]"></div>
    </>
  );
};

export default NotFound;
