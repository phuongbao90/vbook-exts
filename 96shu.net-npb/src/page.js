function execute(url) {
  let BASE_URL = "https://96shu.net";
  let list = [];
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let ul = doc.select(".form-control option");
    ul.forEach((e) => list.push(BASE_URL + e.attr("value")));
    return Response.success(list);
  }
  return null;
}
