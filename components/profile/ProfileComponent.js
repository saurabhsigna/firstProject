import React, { useEffect } from "react";

export default function App({ error, userData }) {
  useEffect(() => {
    console.log("data changed");
    console.log(userData);
  }, [userData]);
  return (
    <div>
      <main class="profile-page">
        <section class="relative block h-[500px]">
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80")',
            }}
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: 'translateZ("0px")' }}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section class="relative py-16 bg-blueGray-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="relative">
                      <img
                        alt="..."
                        src={"/avatars/" + (userData && userData.imgAvatar)}
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="md:py-6 py-2 px-3 md:mt-16 mt-6 sm:mt-0">
                      {/* <button
                        class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button> */}
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      {/* <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span class="text-sm text-blueGray-400">Photos</span>
                      </div>
                      <div class="lg:mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span class="text-sm text-blueGray-400">Comments</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="text-center mt-12">
                  <span className="relative ">
                    <span className="text-3xl font-semibold">
                      {userData && userData.fullName}
                    </span>
                    <span className="invisible w-[73px] top-[-8px] md:visible absolute h-auto ">
                      {" "}
                      {userData && userData.age} y/o
                    </span>
                  </span>

                  <div class="text-sm leading-normal mt-2 mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {userData && userData.address}
                  </div>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <div class="mb-2 text-blueGray-600">
                      <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      Email - <b>{userData && userData.email}</b>
                    </div>
                    <div class="mb-2 text-blueGray-600">
                      <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      Board Category - <b>{userData && userData.board}</b>
                    </div>
                    <div class="mb-2 text-blueGray-600">
                      <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      Phone No. - <b> {userData && userData.mobileNumber}</b>
                    </div>
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Currently In - <b>{userData && userData.class}</b>
                    <div class="mb-2 text-blueGray-600">
                      <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      Age - <b> {userData && userData.age}</b>
                    </div>
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <a href="#pablo" class="font-normal text-pink-500">
                        Update Information
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
