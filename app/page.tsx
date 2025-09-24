import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Download, Mail, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./components/ui/ImageWithFallback";
import { skills } from "./data/skills";
import { projects } from "./data/projects";
import { blogs } from "./data/blogs";
import { experiences } from "./data/experiences";
import { contacts } from "./data/contacts";



export default function Home() {

  return (
      <div className="min-h-screen bg-[#141414] text-white">
        {/* Header */}
        <div className="flex justify-between items-center p-6 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <span>Lille, France</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-6 pb-12">
          {/* Profile Section */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-26 h-32 overflow-hidden flex-shrink-0 ">
              <ImageWithFallback
                  src="/photoPro.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-white mb-1 font-[MyFont] text-[4rem] leading-[0.7]">SIMON BANDIERA</h1>
              <a href="https://github.com/SimonBandiera" target="_blank" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">@SimonBandiera</a>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8 space-y-4 text-gray-400 leading-relaxed">
            <p>
              Double diplomé d'<span className="text-white">Epitech</span> et de l'<span className="text-white">Université de Kent</span>, je suis aujourd'hui spécialisé en développement <span className="text-white">IA</span> et <span className="text-white">bas niveau</span>.
            </p>

            <p>
              Depuis 2022, j'ai réalisé de multiples projets <span className="text-white">freelance</span> où j'ai eu l'occasion de développer mes compétences techniques et de gestion de projet.
            </p>

            <p>
              Je suis toujours à la recherche de <span className="text-white">défis</span> à relever, de nouvelles choses à <span className="text-white">apprendre</span>. En ce moment je cherche des <span className="text-white">missions freelance</span> dans le domaine de l'<span className="text-white">IA</span>, aussi bien en <span className="text-white">recherche appliquée</span> qu'en <span className="text-white">développement de solutions concrètes</span>.
            </p>
          </div>

          {/* Availability and CV Section */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="mailto:simon.bandiera@epitech.eu"
               className="flex items-center gap-2 px-3 py-2 bg-[#1F1F1F] border border-[#3B3B3B] rounded-lg hover:border-[#5eb000] transition-colors duration-300">
            <span className="relative flex h-3 w-3">
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5eb000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5eb000]"></span>
            </span>
              <span className="text-sm">Disponible pour de nouvelles opportunités</span>
            </a>

            <a href="/cv.pdf" download>
              <Button variant="outline"
                      className="bg-[#1F1F1F] border-[#3B3B3B] text-gray-300 hover:bg-[#3B3B3B] hover:text-white cursor-pointer">
                <Download className="w-4 h-4 mr-2"/>
                CV
              </Button>
            </a>
          </div>

          {/* Contact Section */}
          <div className="mb-12">
            <p className="text-gray-400 text-sm mb-4">
              Envie d'<span className="text-white">échanger</span> ?
            </p>

            <div className="flex flex-wrap gap-3">
              {contacts.map((contact) => (
                  <Button
                      key={contact.name}
                      variant="outline"
                      size="sm"
                      className="bg-[#1F1F1F] border-[#3B3B3B] text-gray-300 hover:bg-[#3B3B3B] hover:text-white"
                      asChild
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      <contact.icon className="w-4 h-4 mr-2"/>
                      {contact.name}
                    </a>
                  </Button>
              ))}
            </div>
          </div>

          <Separator className="mt-12 mb-4 bg-[#3B3B3B]"/>

          {/* Projects Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white mb-6 font-[MyFont] text-3xl sm:text-4xl lg:text-[4rem]">Projets</h3>
              <div className="space-y-4">
                {projects.web.map((project) => (
                    <a key={project.name} href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 sm:py-0 sm:pl-0 sm:pr-4 bg-[#1F1F1F]/50 rounded-sm hover:bg-[#1F1F1F]/70 transition-colors duration-300 border border-[#3B3B3B]">

                      {/* Project Image */}
                      <div className="w-full sm:w-48 h-32 sm:h-32 rounded-sm  sm:rounded-r-none overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Project Content */}
                      <div className="flex-1 w-full sm:w-auto">
                        <div className="flex flex-wrap gap-2 mb-2 sm:mb-1">
                          <h4 className="text-white text-lg sm:text-base font-medium">{project.name}</h4>
                          {project.tech && (
                              <Badge variant="secondary" className="bg-green-900/50 text-green-400 text-xs">
                                {project.tech}
                              </Badge>
                          )}
                          {project.badge && (
                              <Badge variant="secondary" className="bg-blue-900/50 text-blue-400 text-xs">
                                ▲ {project.badge}
                              </Badge>
                          )}
                        </div>
                        <div
                            className="text-gray-400 text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: project.description }}
                        />
                      </div>

                      {/* GitHub Button */}
                      <div className="self-start sm:self-center mt-2 sm:mt-0">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:bg-[#3B3B3B] hover:text-white"
                            asChild
                        >
                        <span >
                          <ExternalLink className="w-4 h-4"/>
                        </span>
                        </Button>
                      </div>
                    </a>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Section */}
          <div className="mt-12 mb-4 space-y-6">
            <div>
              <p className="text-white text-sm mb-6">Blogs</p>
            </div>
            <div className="space-y-3">
              {blogs.map((blog) => (
                  <a
                      key={blog.title}
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-[#1F1F1F]/50 rounded-sm hover:bg-[#1F1F1F]/70 transition-colors duration-300 cursor-pointern border border-[#3B3B3B]"
                  >
                    <span className="text-gray-300">{blog.title}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
              ))}
            </div>
          </div>

          <Separator className="mt-12 mb-4 bg-[#3B3B3B]"/>


          {/* Skills Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-white mb-2 font-[MyFont] text-[4rem]">Skills</h2>
              <p className="text-gray-400 text-sm mb-6">
                Voici la liste non exhaustive des technologies avec lesquelles j'ai travaillé.
              </p>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-gray-400 text-sm mb-3">{"< LANGUAGES />"}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="bg-[#1F1F1F] text-gray-300 hover:bg-[#3B3B3B]">
                      <div className={`w-2 h-2 ${skill.color} rounded-full mr-2`}></div>
                      {skill.name}
                    </Badge>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-gray-400 text-sm mb-3">{"< FRAMEWORKS & LIBRAIRIES />"}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="bg-[#1F1F1F] text-gray-300 hover:bg-[#3B3B3B]">
                      <div className={`w-2 h-2 ${skill.color} rounded-full mr-2`}></div>
                      {skill.name}
                    </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-gray-400 text-sm mb-3">{"< BACKEND />"}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="bg-[#1F1F1F] text-gray-300 hover:bg-[#3B3B3B]">
                      <div className={`w-2 h-2 ${skill.color} rounded-full mr-2`}></div>
                      {skill.name}
                    </Badge>
                ))}
              </div>
            </div>


          </div>

          <Separator className="mt-12 mb-4 bg-[#3B3B3B]"/>

          {/* Work Experience Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-white mb-2 font-[MyFont] text-[4rem] leading-[0.7] mt-10 mb-10">Expérience pro.</h2>
              <p className="text-gray-400 text-sm mb-6">
                Mes dernières expériences professionnelles.
              </p>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                  <Card key={exp.company} className={`bg-[#1F1F1F]/50 border-[#3B3B3B] p-6`}>
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-white">{exp.role}</h3>
                          <p className="text-gray-400">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{exp.period}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </div>
                    <div className="border-l-2 border-gray-700 pl-4">
                      <p className="text-gray-400 text-sm italic mb-2"
                         dangerouslySetInnerHTML={{ __html: exp.testimonial }}
                      />
                    </div>
                  </Card>
              ))}
            </div>
          </div>

          <Separator className="mt-12 mb-4 bg-[#3B3B3B]"/>


          {/* Contact Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-white font-[MyFont] text-[4rem] leading-[0.7] mt-10 mb-10">Travaillons ensemble !</h2>
              <p className="text-gray-400 text-sm max-w-md  mt-8 ">
                Un projet en tête ou envie de discuter ? Je suis toujours ravi d'entrer en contact avec de nouvelles personnes et d'explorer de nouvelles opportunités.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex ">
                <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200"
                    asChild
                >
                  <a href="mailto:simon.bandiera@epitech.eu">
                    <Mail className="w-4 h-4 mr-2"/>
                    Contactez-moi !
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {contacts.map((contact, idx) => (
                    <Button
                        key={contact.name}
                        variant="outline"
                        size="sm"
                        className={`bg-[#1F1F1F] border-[#3B3B3B] text-gray-300 hover:bg-[#3B3B3B] hover:text-white ${idx === 0 ? 'hidden' : ''}`}
                        asChild
                    >
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        <contact.icon className="w-4 h-4 mr-2"/>
                        {contact.name}
                      </a>
                    </Button>
                ))}
              </div>

              <div className="flex items-center  gap-2 text-gray-400 text-sm">
            <span className="relative flex h-3 w-3">
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5eb000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5eb000]"></span>
            </span>
                <span>Disponible pour des missons freelances</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-8 border-t border-[#3B3B3B]">
            <div className="font-[MyFont] text-[1.5rem]">
              <a href={"https://github.com/SimonBandiera/portfolio"} target="_blank"
                 className="text-red-500 mb-2 hover:text-[#FF9632] transition-colors duration-300">sbandiera.dev</a>
            </div>
          </div>
        </div>
      </div>
  );
}
