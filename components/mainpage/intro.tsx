import { Card } from "../ui/card";
import FeatureCard from "./featureCard";

export default function IntroPage() {
  return (
    <div className="w-[100%] mt-10 flex flex-col items-center h-[700px] p-4 ">
      <p className="text-lg my-5 font-bold">
        Verified Voices, Anonymous Conversations, Endless Insights.
      </p>
      <div className="flex-wrap flex">
        <FeatureCard
          topText="Community"
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fill="#2A59CF"
                d="M10 6.5c-.854 0-1.617.39-2.121 1a2.75 2.75 0 0 0 1.735 4.473a5.52 5.52 0 0 1 3.136-2.689V9.25c0-.665-.236-1.275-.629-1.75c-.504-.61-1.267-1-2.121-1m8.677 4.422a5.49 5.49 0 0 0-4.932-1.87a3.7 3.7 0 0 0-.427-1.552H17.5A1.5 1.5 0 0 1 19 9v.5c0 .48-.11.964-.323 1.422M9.207 13A5.5 5.5 0 0 0 9 14.5c0 1.797.861 3.392 2.194 4.395A6.7 6.7 0 0 1 10 19c-3.14 0-5-2.029-5-4v-.5A1.496 1.496 0 0 1 6.5 13zm-4.892.284C2.205 12.713 1 11.087 1 9.5V9a1.5 1.5 0 0 1 1.5-1.5h4.183a3.7 3.7 0 0 0-.433 1.75A3.74 3.74 0 0 0 7.45 12H6.5a2.5 2.5 0 0 0-2.185 1.284M6 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 6 1m8 0a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 14 1m.5 18a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5"
              />
            </svg>
          }
          description="Interact with the global student community, share your thoughts without hesitation"
        />
        <FeatureCard
          topText="Resources"
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <g fill="#726BD3">
                <path d="m224 80l-96 56l-96-56l96-56Z" opacity="0.2" />
                <path d="M230.91 172a8 8 0 0 1-2.91 10.91l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 36 169.09l92 53.65l92-53.65a8 8 0 0 1 10.91 2.91M220 121.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82M24 80a8 8 0 0 1 4-6.91l96-56a8 8 0 0 1 8.06 0l96 56a8 8 0 0 1 0 13.82l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 24 80m23.88 0L128 126.74L208.12 80L128 33.26Z" />
              </g>
            </svg>
          }
          description="Help in peer learning by sharing resources & utilize huge number of resources tried by others "
        />
        <FeatureCard
          topText="Review"
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#179AE8"
                d="m12 12.167l1.67 1.016q.217.136.434-.022t.161-.426l-.442-1.887l1.47-1.263q.21-.187.13-.432t-.354-.27l-1.936-.175l-.76-1.781q-.106-.242-.373-.242t-.373.242l-.76 1.78l-1.936.176q-.273.025-.354.27t.13.432l1.47 1.263l-.442 1.887q-.056.267.161.426t.435.022zM6.077 17l-1.704 1.704q-.379.379-.876.174T3 18.133V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.615v10.77q0 .69-.462 1.153T19.385 17zm-.427-1h13.735q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03zM4 16V4z"
              />
            </svg>
          }
          description="Anonymously share/see reviews"
        />
        <FeatureCard
          topText="Opportunity"
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="#D03D93"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
                <path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2" />
              </g>
            </svg>
          }
          description="Build your network with other students around the world, share opportunities"
        />
      </div>
    </div>
  );
}
