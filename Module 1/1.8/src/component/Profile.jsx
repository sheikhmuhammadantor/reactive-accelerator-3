import { getImageUrl } from "../utils/getImageUrl";
import modAwards from "../utils/modAwards";

export default function Profile({ name, profession, awards, discovered, imgID = "szV5sdG" }) {

    const [awardsCounds, awardsString] = modAwards(awards);

    return (
        <section className="profile border-2 my-4 p-4 rounded-2xl">
            <h2 className="text-center text-2xl py-2 font-bold">{name}</h2>
            <img
                className="avatar mx-auto rounded-full ring-2 ring-blue-500"
                src={getImageUrl(imgID)}
                alt={name}
                width={70}
                height={70}
            />
            <ul className="text-left">
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awardsCounds} </b>
                    {awardsString}
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    );
}