import { GetBlockchain } from "./getBlockchain";
import ResourceCard from "../resourcecard";
import Reveal from "@/components/reveal";

export default async function Blockchain() {
  const Web3Resources = await GetBlockchain();
  return (
    <div className="px-4 overflow-auto overflow-y-scroll h-[88vh] scrollbar-hide">
      {Web3Resources.map((e, key) => {
        return (
          <Reveal key={key}>
            <ResourceCard
              key={key}
              id={e.id}
              title={e.title}
              description={e.description}
              categary={"blockchain"}
              resourceLink={e.resourceLink}
              userId={e.userId}
            />
          </Reveal>
        );
      })}
    </div>
  );
}
