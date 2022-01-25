import bootstrapLogo from "./../assets/bootstrapLogo.svg";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center border-slate-500 m-5">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg  dark:border-2 dark:border-white">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />

        <div className="p-6 flex flex-col justify-around">
          <div>
            <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p className="text-gray-700 text-xs md:text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
          <div className="flex space-x-3 mt-3">
            <a href="/">
              <div className="rounded-full flex content-center justify-center box-content border-slate-500 border-2">
                <Image
                  src={bootstrapLogo}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </a>
            <a href="/">
              <div className="rounded-full flex content-center justify-center box-content border-slate-500 border-2">
                <Image
                  src={bootstrapLogo}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </a>
            <a href="/">
              <div className="rounded-full flex content-center justify-center box-content border-slate-500 border-2">
                <Image
                  src={bootstrapLogo}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </a>
            <a href="/">
              <div className="rounded-full flex content-center justify-center box-content border-slate-500 border-2">
                <Image
                  src={bootstrapLogo}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
