import { BodyPres } from "./body-presentation";
import { Cards } from "./cards";
import {Divider} from "@nextui-org/divider";
import { Aboutme } from "./aboutme";
import { Technology } from "./technology.jsx"

export function Body () {
    return (
        <div>
            <BodyPres />
            <Divider className="my-4" />
            <h1 className="subtitulos">About Me 🚀</h1>
            <div className="info">
                <Aboutme />
                <Technology />
            </div>
            <Divider className="my-4" />
            <h1 className="subtitulos">Projects 💻</h1>
            <Cards />
        </div>
    );
}