import { GetDevOps } from "./getDevOps";
import ResourceCard from "../resourcecard";
import Reveal from "@/components/reveal";

export default async function Devops() {
  const DevOpsResources = await GetDevOps();
  return (
    <div className="px-4 overflow-auto overflow-y-scroll h-[88vh] scrollbar-hide">
      {DevOpsResources.map((e, key) => {
        return (
          <Reveal key={key}>
            <ResourceCard
              key={key}
              id={e.id}
              title={e.title}
              description={e.description}
              categary={"devops"}
              resourceLink={e.resourceLink}
              userId={e.userId}
            />
          </Reveal>
        );
      })}
    </div>
  );
}
