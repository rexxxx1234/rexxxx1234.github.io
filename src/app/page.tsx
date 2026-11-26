import { ArrowUpRight } from "lucide-react";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";

export default function Home() {
  const publicationGroups = [
    {
      title: "Selected Publications",
      publications: publicationData
        .filter((publication) => publication.selectedOrder !== undefined)
        .sort((a, b) => a.selectedOrder! - b.selectedOrder!),
    },
    {
      title: "More Publications",
      publications: publicationData.filter(
        (publication) => publication.selectedOrder === undefined
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
              <a
                href="https://mapmyvisitors.com/web/1c9p7"
                className="group block w-full max-w-[250px] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <span className="mb-2 flex items-baseline justify-between gap-3">
                  <span className="font-serif text-base text-zinc-800">Visitor map</span>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-600 group-hover:underline">
                    View statistics <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </span>
                {/* Request the live image directly so MapMyVisitors can record the visit. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://mapmyvisitors.com/map.png?d=UTEX4-nk3kNIF_5DFe7mfDGAR_YxmqweiTdn0K0crts&cl=ffffff&co=456879&ct=ffffff&w=250"
                  alt="World map of visitor locations and pageviews for the displayed dates"
                  width={250}
                  height={145}
                  className="block h-auto w-full rounded-md"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                          News
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return publicationGroups.map(({ title, publications }) =>
                    publications.length > 0 ? (
                      <section key={title}>
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                          {title}
                        </h2>
                        <div className="space-y-12">
                          {publications.map((publication, index) => (
                            <div key={publication.title}>
                              <PublicationEntry publication={publication} />
                              {index < publications.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    ) : null
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Portfolio
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
