import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export function Cards() {
    return (
        <div className="cards">
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <p className="text-tiny uppercase font-bold">Portfolio</p>
                    <small className="text-default-500">React + NextUI</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s"
                        width={270}
                    />
                </CardBody>
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex items-center justify-center">
                        <Button style={{ position: "relative", left: "95%" }} radius="full" size="sm">
                            View repo
                        </Button>
                    </div>
                </CardFooter>
            </Card>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <p className="text-tiny uppercase font-bold">Cookies Grabber</p>
                    <small className="text-default-500">Python + html</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="projects/cookiesgrabber.jpg"
                        width={270}
                    />
                </CardBody>
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex items-center justify-center">
                        <Button style={{ position: "relative", left: "95%" }} radius="full" size="sm">
                            View repo
                        </Button>
                    </div>
                </CardFooter>
            </Card>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <p className="text-tiny uppercase font-bold">Discord chatbot</p>
                    <small className="text-default-500">Python + OpenAI API</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="projects/gptdiscord.jpg"
                        width={270}
                    />
                </CardBody>
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex items-center justify-center">
                        <Button style={{ position: "relative", left: "95%" }} radius="full" size="sm">
                            View repo
                        </Button>
                    </div>
                </CardFooter>
            </Card>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <p className="text-tiny uppercase font-bold">Ipcam Finder</p>
                    <small className="text-default-500">Python</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="projects/ipcam.jpg"
                        width={270}
                    />
                </CardBody>
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex items-center justify-center">
                        <Button style={{ position: "relative", left: "95%" }} radius="full" size="sm">
                            View repo
                        </Button>
                    </div>
                </CardFooter>
            </Card>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <p className="text-tiny uppercase font-bold">Gemini screen assistant</p>
                    <small className="text-default-500">Python + Gemini API</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="projects/gemini.jpg"
                        width={270}
                    />
                </CardBody>
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex items-center justify-center">
                        <Button style={{ position: "relative", left: "95%" }} radius="full" size="sm">
                            View repo
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
