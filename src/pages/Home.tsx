function Home() {
  return (
    <div>
      <div className="flex max-md:flex-col">
        <div
          id="right-home-container"
          className="min-w-[100px] w-[60%] py-[10px] max-md:w-full"
        >
          <div
            id="right1"
            className="w-[65%] mx-auto mb-[10px] bg-[#f9f2e8] p-[10px] rounded-[10px]"
          >
            <h3 id="right1-header">Subscribe Contact Alice +9198000000..</h3>
            <span id="right1-caption">Now,Alice can send you scheduled message.</span>
          </div>

          <div
            id="right2"
            className="w-[65%] mx-auto mb-[10px] bg-[#f9f2e8] p-[10px] rounded-[10px]"
          >
            <h3 id="right2-header">Schedule “Good Night Dad” to dad after 10 hours</h3>
            <span id="right2-caption">
              Dad receives message after 10 hours, if they subscribed to you.
            </span>
          </div>

          <div
            id="right3"
            className="w-[65%] mx-auto mb-[10px] bg-[#f9f2e8] p-[10px] rounded-[10px]"
          >
            <h3 id="right3-header">Show todos, add todo, done &lt;todo id&gt;</h3>
            <span id="right3-caption">Manage your todo list from your chat.</span>
          </div>
        </div>
        <div
          id="left-home-container"
          className="w-[40%] flex items-center max-md:justify-center max-md:w-full"
        >
          <img id="pekzho-mascot-image" src="/pekzho-mascot.png" alt="Pekzho mascot" className="w-[45%] max-md:w-[45%] ml-[40px] max-md:ml-[0px] max-md:mb-[40px]" />
        </div>
      </div>

      <div className="flex max-md:flex-col">
        <div
          id="left-action-btn-container"
          className="w-[50%] max-md:w-[100%] flex items-center max-md:justify-center py-4 mx-auto"
        >
          <button
            id="beta-invite"
            className="border mx-auto w-[220px] text-center whitespace-nowrap translate-x-[40px] max-md:translate-x-0 bg-[#f9f2e8] border border-[#895a06] text-[#895a06] px-5 py-2 rounded-md font-semibold cursor-pointer select-none transition-all duration-150 hover:bg-[#fff7ec] hover:shadow-md active:scale-95 active:shadow-inner"
          >
            Get the damn beta invite
          </button>
        </div>
        <div
          id="right-action-btn-listener"
          className="w-[50%] max-md:w-[100%] flex items-center max-md:justify-center py-4 mx-auto"
        >
          <button
            id="skill-voter"
            className="border mx-auto w-[220px] text-center whitespace-nowrap -translate-x-[40px] max-md:translate-x-0 bg-[#f9f2e8] border border-[#895a06] text-[#895a06] px-5 py-2 rounded-md font-semibold cursor-pointer select-none transition-all duration-150 hover:bg-[#fff7ec] hover:shadow-md active:scale-95 active:shadow-inner"
          >
            Vote for next skill
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
