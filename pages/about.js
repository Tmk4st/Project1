export default function About() {
  return (
    <>
      <div className="w-screen h-screen  bg-gradient-to-r from-gray-400 flex flex-col items-center justify-around relative gap-4">
        <div className=" w-full h-1/5  flex gap-4 items-center">
          <div className=" w-1/5 h-full ">
            <div className=" w-50 h-50 rounded-full  mt-14 flex items-center justify-center gap-4">
              <div className=" w-10 h-10 bg-rose-400  rounded-full mt-0 flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-slate-50 "
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className=" font-bold text-blue-900 text-2xl "> Message</h1>
                <div className="w-50 h-50  mt-2 flex items-center justify-center"></div>
              </div>
            </div>
          </div>
          <div className=" w-3/5 h-full  flex flex-row gap-4">
            <div className="w-1/6 h-full   flex flex-col items-center justify-center">
              <a href="http://localhost:3000/">
                <h1 className=" font-bold "> Profile</h1>
              </a>
            </div>
            <div className="w-1/6 h-full   flex flex-col items-center justify-center ">
              <div>
                <h1 className=" font-bold bg-slate-200 rounded px-2 py-1">
                  {" "}
                  About
                </h1>
              </div>
            </div>
            <div className="w-1/6 h-full   flex flex-col items-center justify-center">
              <div>
                <h1 className=" font-bold "> Hobby</h1>
              </div>
            </div>
            <div className="w-1/6 h-full   flex flex-col items-center justify-center">
              <div>
                <h1 className=" font-bold "> About</h1>
              </div>
            </div>
            <div className="w-1/6 h-full   flex flex-col items-center justify-center">
              <div>
                <h1 className=" font-bold "> About</h1>
              </div>
            </div>
            <div className="w-1/6 h-full   flex flex-col items-center justify-center">
              <div>
                <h1 className=" font-bold "> About</h1>
              </div>
            </div>
          </div>
          <div className=" w-1/5 h-10 bg-rose-400  rounded-full  flex items-center justify-center mr-14 ">
            <a href="https://taxreport.mta.gov.mn/#/signin" target="_blank">
              <h1 className=" font-bold text-slate-50"> Commit</h1>
              <div className="w-50 h-50  mt-0 flex items-center"></div>
            </a>
          </div>
        </div>
        <div className="w-full h-full  flex gap-4 items-center">
          <div className="w-2/3 h-full  flex flex-col gap-4">
            <div className=" w-full h-1/6 "></div>
            <div className=" w-full h-1/6  flex flex-row gap-4 items-center justify-center">
              <div className="w-10 h-[2px] bg-rose-400  mt-8"></div>
              <div className="w-[80%] h-full ">
                <h1 className=" font-bold text-blue-900  text-5xl flex mt-12 items-center">
                  {" "}
                  CREATIVE & CLEAN
                </h1>
              </div>
            </div>
            <div className=" w-full h-1/6  flex  ml-8">
              <h1 className=" font-black text-blue-900  text-8xl flex ml-14 items-center">
                {" "}
                MY NAME
              </h1>
            </div>
            <div className=" w-full h-1/6  flex  ml-8">
              <h1 className=" font-black text-rose-400 tracking-[6px] text-8xl flex ml-14 items-center">
                {" "}
                TEMUULEN
              </h1>
            </div>
            <div className=" w-[80%] h-1/6  ml-8">
              <h1 className="  font-normal  text-black  text-xs flex ml-14 items-center">
                {" "}
                Hello. My name is Temuulen. I'm 27 years old. I am devoted to my
                job work. I think most myself when I am fulfilled by my
                work—including the workjob of writing anthe essay about
                workbusiness. My sense of identityindividuality is so boundheld
                up inat my jobwork, my sense of accomplishmentachievement, and
                my feelingfeel of productivity that boutsrounds of writer’s
                blockstop canwill send me into anthe existentialexperiential
                funk that canwill spillflow over into every part of my life. And
                I knowremember enough writersauthors, tech workers, marketers,
                artists, and entrepreneurs to knowrealize that my affliction is
                commonfamiliar, especiallyparticularly within athe
                certainspecific tranche of the white-collar workforce.
              </h1>
            </div>
            <div className=" w-[80%] h-10  ml-20  mb-20 flex flex-row gap-4">
              <div
                className=" w-1/4 h-50
                 bg-rose-400  rounded-full flex items-center justify-center"
              >
                <div>
                  <h1 className=" font-bold text-slate-50"> MORE ME</h1>
                  <div className="w-50 h-50  mt-0 flex items-center"></div>
                </div>
              </div>
              <div
                className=" w-1/4 h-50
                   rounded-full flex flex-row gap-4"
              >
                <div className=" w-full h-full  border-rose-400 rounded-full  border-2 flex items-center justify-start">
                  <div className="w-[30%] h-full bg-rose-400 rounded-full flex items-center justify-center">
                    <h1 className=" font-bold text-slate-50"> D</h1>
                  </div>
                  <h1 className="font-bold text-rose-400  ml-1 flex flex-col">
                    MORE ABOUT
                  </h1>
                  <div className="w-50 h-50  mt-0 flex items-center"></div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-90 h-full">
            <img src="profile3.webp" className=" w-full h-full"></img>
          </div>
        </div>
      </div>
    </>
  );
}
