import "./styles.css";

//テキストボックスの中身を入力し初期化を行う
const onClickAdd = () => {
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div要素の生成
  const div = document.createElement("div");
  div.className = "list-low";

  //liタグの生成

  const li = document.createElement("li");
  li.innterText = inputtext;
  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
