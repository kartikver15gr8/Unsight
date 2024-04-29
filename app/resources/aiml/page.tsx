import ResourceCard from "../resourcecard";
import { GetAIML } from "./getAIML";
import Reveal from "@/components/reveal";
export default async function AIML() {
  const AIMLResources = await GetAIML();
  return (
    <div className="px-4 overflow-auto overflow-y-scroll h-[88vh] scrollbar-hide">
      {AIMLResources.map((e, key) => {
        return (
          <Reveal key={key}>
            <ResourceCard
              key={key}
              id={e.id}
              title={e.title}
              description={e.description}
              categary={"aiml"}
              resourceLink={e.resourceLink}
              userId={e.userId}
            />
          </Reveal>
        );
      })}
    </div>
  );
}
