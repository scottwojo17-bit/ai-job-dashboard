export default {
  async fetch(request) {
    const jobs = [
      {
        id: "sample-1",
        company: "OpenAI",
        title: "Operations Analyst",
        category: "Operations",
        score: 8.5,
        source: "Worker Feed",
        dateFound: new Date().toISOString().slice(0,10),
        resumeAngle: "Operations",
        location: "Remote",
        descriptionUrl: "https://openai.com/careers",
        applyUrl: "https://openai.com/careers",
        why: ["Live feed match","Current opening","Remote fit"]
      }
    ];

    return new Response(JSON.stringify({
      meta: {
        source: "worker",
        lastUpdated: new Date().toISOString().slice(0,10)
      },
      jobs
    }, null, 2), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*"
      }
    });
  }
};
