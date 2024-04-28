import { GetBlockchain } from "./getBlockchain";
import ResourceCard from "../resourcecard";

export default async function Blockchain() {
  const Web3Resources = await GetBlockchain();
  return (
    <div className="px-4">
      {Web3Resources.map((e) => {
        return (
          <ResourceCard
            id={e.id}
            title={e.title}
            description={e.description}
            categary={"blockchain"}
            resourceLink={e.resourceLink}
            userId={e.userId}
          />
        );
      })}
    </div>
  );
}
