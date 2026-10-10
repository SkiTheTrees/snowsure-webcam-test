const resorts = {
  copper: "copper-mountain",
  abasin: "arapahoe-basin",
  eldora: "eldora",
  winterpark: "winter-park"
};

async function testWebcams() {
  let results = "";

  for (const key of Object.keys(resorts)) {
    const id = resorts[key];
    const url = `https://api.snowsure.com/v1/public/resorts/${id}/webcams`;

    results += `\n=== ${key.toUpperCase()} ===\n`;
    results += `URL: ${url}\n`;

    try {
      const res = await fetch(url);
      const json = await res.json();

      results += JSON.stringify(json, null, 2);
      results += "\n\n";
    } catch (err) {
      results += `ERROR: ${err}\n\n`;
    }
  }

  document.getElementById("output").textContent = results;
}

testWebcams();

