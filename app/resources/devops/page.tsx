import { GetDevOps } from "./getDevOps";
import ResourceCard from "../resourcecard";

export default async function Devops() {
  const DevOpsResources = await GetDevOps();
  return (
    <div className="px-4">
      {DevOpsResources.map((e) => {
        return (
          <ResourceCard
            id={e.id}
            title={e.title}
            description={e.description}
            categary={"devops"}
            resourceLink={e.resourceLink}
            userId={e.userId}
          />
        );
      })}
    </div>
  );
}
