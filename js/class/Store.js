export default class Store {
  // metodas irasyti duomenis

  static save(stateArr) {
    // paverciam duomenis i json (text) formatu
    const stateInJson = JSON.stringify(stateArr);
    localStorage.setItem("todoData", stateInJson);
  }
  // metodas nuskaityti duomentis
  static loadTodoData() {
    const dataFromLocalStore = localStorage.getItem("todoData");
    // jei nera duomenu nutraukiam funkcija
    if (dataFromLocalStore === null) return [];
    // console.log(dataFromLocalStore);
    const objFromStoreJsonData = JSON.parse(dataFromLocalStore);
    // console.log("objFromStoreJsonData", objFromStoreJsonData);
    return objFromStoreJsonData;
  }
}
