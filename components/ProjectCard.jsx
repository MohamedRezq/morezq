import bootstrapLogo from "./../assets/bootstrapLogo.svg";
import Image from "next/image";

const ProjectCard = ({ proj }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center border-slate-500 m-5 border-2 border-gray-100">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg  dark:border-2 dark:border-white">
        <img
          className=" w-full h-96 md:h-auto md:object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={proj.node.homeimg.url}
          alt={proj.node.title[0].text}
        />
        <div className="p-6 flex flex-col justify-around">
          <div>
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              <a
                href="https://homell.vercel.app/"
                title="Visit App"
                className="text-gray-900 text-xl font-medium no-underline"
              >
                {proj.node.title[0].text}
              </a>
            </h5>
            <p className="text-gray-700 text-xs md:text-base mb-4">
              {proj.node.description[0].text}
            </p>
            <p className="text-gray-600 text-xs">
              Last updated {proj.node.release_date}
            </p>
          </div>
          <div className="flex space-x-3 mt-3">
            {proj.node.skills.map((skill, i) => (
              <div
                key={i}
                className="rounded-full flex content-center justify-center box-content border-slate-500 border-2"
              >
                <a href="">
                  <Image
                    src={skill.skill.img.url}
                    width={30}
                    height={30}
                    className="rounded-full"
                    alt={skill.skill.name[0].text}
                    title={skill.skill.name[0].text}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
