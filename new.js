async function getData() {
    return new Promise(function(resolve, reject) {
      reject(new Error("요청 실패"));
    });
  }
  
  async function fetchData() {
    try {
      await getData(); // getData 함수의 Promise를 기다림
    } catch (error) {
      console.log(error); // 요청 실패 출력
    }
  }
  
  // fetchData 함수 호출
  fetchData();
  