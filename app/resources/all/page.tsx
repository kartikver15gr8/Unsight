import ResourceCard from "../resourcecard";
import { GetAllResources } from "./getall";
import Reveal from "@/components/reveal";
export default async function AllResources() {
  const resources = await GetAllResources();
  return (
    <div className="px-4 overflow-auto overflow-y-scroll h-[88vh] scrollbar-hide">
      {resources.map((e, key) => {
        return (
          <Reveal>
            <ResourceCard
              key={key}
              title={e.title}
              description={e.description}
              categary={e.categary}
              resourceLink={e.resourceLink}
              id={e.id}
              userId={e.userId}
            />
          </Reveal>
        );
      })}
    </div>
  );
}
