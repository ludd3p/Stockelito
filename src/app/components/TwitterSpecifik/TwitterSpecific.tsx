import { Tweet } from "react-tweet";

export const TwitterSpecific = ({ twitterIds }: { twitterIds: string[] }) => {
    return (
        <div className="dark">
            {twitterIds.map((id) => (
                <Tweet key={id} id={id} />
            ))}
        </div>
    );
};
