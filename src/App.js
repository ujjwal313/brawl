import { useEffect } from "react";
import { Client } from "brawlstars";

function App() {
  // const url = "https://api.brawlstars.com/v1/players/%23909lu288/battlelog";
  // let options = {
  //   headers: {
  //     Authorization:
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjIyM2M2NDBmLWJjOGEtNGIyOC05MDQwLWI5YTk3NGJiYjg2OSIsImlhdCI6MTY0OTc3OTExNywic3ViIjoiZGV2ZWxvcGVyL2ZhYWU1MGVkLWMwODAtMDZlZC1jMGE5LTFlMDAwODQ4NjAxZSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDkuMzcuNjkuMzIiXSwidHlwZSI6ImNsaWVudCJ9XX0.0m-FjPInZnO14zBoZWTUGiNFDLB64raxexIi2OkS7bIm_CNxKn0RCG3fKDijvD0xlvmtcedGlPUW3pFnT44tFg",
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Credentials": "true",
  //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  //     "Access-Control-Allow-Headers":
  //       "X-Requested-With, content-type, Authorization",
  //     "Access-Control-Max-Age": "3600",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // };
  // useEffect(() => {
  //   fetch(url, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  const client = new Client(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjIyM2M2NDBmLWJjOGEtNGIyOC05MDQwLWI5YTk3NGJiYjg2OSIsImlhdCI6MTY0OTc3OTExNywic3ViIjoiZGV2ZWxvcGVyL2ZhYWU1MGVkLWMwODAtMDZlZC1jMGE5LTFlMDAwODQ4NjAxZSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDkuMzcuNjkuMzIiXSwidHlwZSI6ImNsaWVudCJ9XX0.0m-FjPInZnO14zBoZWTUGiNFDLB64raxexIi2OkS7bIm_CNxKn0RCG3fKDijvD0xlvmtcedGlPUW3pFnT44tFg",
    {
      cache: true, // default is true
      cacheOptions:
        undefined /* options for node-cache, default is undefined. */,
    }
  );
  client
    .getPlayer("909lu288")
    .then((player) => console.log(player.name))
    .catch((err) => console.error(err));
  return <div className="App"></div>;
}

export default App;
