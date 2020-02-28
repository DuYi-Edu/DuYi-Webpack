import $ from "jquery";
$(".red").click(async function() {
  const {chunk} = await import("./util")
  console.log(chunk([1, 3, 4, 67], 2));
});
