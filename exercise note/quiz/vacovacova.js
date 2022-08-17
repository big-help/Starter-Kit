function repeatVaco(n) {
  const oddVaco = "바";
  const evenVaco = "코";
  let result = "바";
  
  for (i = 1; i < n; i++) {
    if (i % 2 === 0) {
      result += oddVaco
    } else {
      result += evenVaco
    }
  }
  return result;
}

const result1 = (repeatVaco(1) === "바");
const result2 = (repeatVaco(2) === "바코");
const result3 = (repeatVaco(4) === "바코바코");
const result4 = (repeatVaco(5) === "바코바코바");
const result5 = (repeatVaco(10) === "바코바코바코바코바코");

if (
  result1 &&
  result2 &&
  result3 &&
  result4 &&
  result5
) {
  alert("🎉");
}