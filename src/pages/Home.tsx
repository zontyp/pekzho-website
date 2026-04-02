function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4">

          <div className="bg-[#f9f2e8] p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">
              Subscribe Contact Alice +9198000000..
            </h3>
            <p className="text-sm text-gray-600">
              Now Alice can send you scheduled message.
            </p>
          </div>

          <div className="bg-[#f9f2e8] p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">
              Schedule “Good Night Dad” to dad after 10 hours
            </h3>
            <p className="text-sm text-gray-600">
              Dad receives message after 10 hours if subscribed.
            </p>
          </div>

          <div className="bg-[#f9f2e8] p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">
              Show todos, add todo, done &lt;todo id&gt;
            </h3>
            <p className="text-sm text-gray-600">
              Manage your todo list from your chat.
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/pekzho-mascot.png"
            alt="Pekzho mascot"
            className="w-60 md:w-72"
          />
        </div>

      </div>

      {/* BUTTON SECTION */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">

        <button
          className="bg-[#f9f2e8] border border-[#895a06] text-[#895a06] px-6 py-2 rounded-md font-semibold hover:bg-[#fff7ec] hover:shadow-md active:scale-95 transition"
        >
          Get the damn beta invite
        </button>

        <button
          className="bg-[#f9f2e8] border border-[#895a06] text-[#895a06] px-6 py-2 rounded-md font-semibold hover:bg-[#fff7ec] hover:shadow-md active:scale-95 transition"
        >
          Vote for next skill
        </button>

      </div>

    </div>
  );
}

export default Home;