"use client";

import { Alert } from "@/components/Alert";
import { Button } from "@/components/Button";
import { Loader } from "@/components/Loader";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaGithubAlt,
  FaGoogle,
  FaFacebook,
  FaSpotify,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryToken = searchParams.get("status");

    if (queryToken && queryToken === "emailIsAlreadyInUse") {
      setIsAlertOpen(true);
    }
  }, []);

  const handleLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/profile" });
    } catch (error) {
      console.error(`Erro ao logar com ${provider}: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex h-screen justify-center items-center">
      <div className="relative z-10 bg-mainWhite dark:bg-mainBlack shadow-light dark:shadow-dark flex flex-col border border-mainBlack dark:border-mainWhite min-w-72 max-w-[500px] rounded-md p-8 gap-6">
        {isLoading && <Loader />}
        {isAlertOpen && (
          <Alert
            isAlertOpen={isAlertOpen}
            message="Esse email já está em uso!"
            onClose={() => setIsAlertOpen(false)}
            alertDisplayTime={5000}
          />
        )}
        <h1 className="flex justify-center text-2xl font-semibold">
          Entre com
        </h1>

        <div className="flex justify-center flex-wrap gap-4">
          <Button
            onlyStroke
            onClick={() => handleLogin("github")}
            leftIcon={<FaGithubAlt size={"24px"} />}
          >
            Github
          </Button>
          <Button
            onlyStroke
            onClick={() => handleLogin("google")}
            leftIcon={<FaGoogle size={"24px"} />}
          >
            Google
          </Button>
          <Button
            onlyStroke
            onClick={() => handleLogin("facebook")}
            leftIcon={<FaFacebook size={"24px"} />}
          >
            Facebook
          </Button>
          <Button
            onlyStroke
            onClick={() => handleLogin("discord")}
            leftIcon={<FaDiscord size={"24px"} />}
          >
            Discord
          </Button>
          <Button
            onlyStroke
            onClick={() => handleLogin("spotify")}
            leftIcon={<FaSpotify size={"24px"} />}
          >
            Spotify
          </Button>
          <Button
            onlyStroke
            onClick={() => handleLogin("twitch")}
            leftIcon={<FaTwitch size={"24px"} />}
          >
            Twitch
          </Button>
        </div>
      </div>
      <Image
        className="pointer-events-none absolute dark:hidden right-0 bottom-0"
        src={"linesBlack.svg"}
        alt="lines"
        width={500}
        height={500}
      />
      <Image
        className="pointer-events-none hidden dark:block absolute right-0 bottom-0"
        src={"linesWhite.svg"}
        alt="lines"
        width={500}
        height={500}
      />
    </section>
  );
}
