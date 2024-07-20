import CardStack from "./ui/card-stack";
import { cn } from "../lib/utils";
export function CardStackDemo() {
    return (
            <CardStack items={CARDS} />
    );
}

const CARDS = [
    {
        id: 0,
        name: "John Adams",
        designation: "Sr. Programmer, KPMG",
        job_score: 90,
        orion_score:72,
        skills:['go','swift','perl','bash','python','c#'],
        content: "John possesses advanced knowledge of various programming languages allowing him to be versatile and flexible.",
        img_url:"/images/john.png"
    },
    {
        id: 1,
        name: "Emma Williams",
        designation: "Sr. App Developer, KPMG",
        job_score: 89,
        orion_score:87,
        skills:['go','swift','perl','bash','python','c#'],
        content: "Emma in a seasoned app developer with more than 10 years of experience in development of IOS apps.",
        img_url:"/images/emma.png"

    }
];
