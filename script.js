
    async function fetchColorNames() {
      try {
        let response = await fetch('https://reqres.in/api/unknown');
        let data = await response.json();
        return data.data;
      } catch (error) {
        console.error('Error fetching color names:', error);
      }
    }

    
    async function fetchNameAndColor() {
      try {
        let ferebi = await fetchColorNames();
        let index = Math.floor(Math.random() * ferebi.length);
        let feri = ferebi[index];
        let dagvibrunos = await fetch(`https://reqres.in/api/unknown/${feri.id}`);
        let boloshi = await dagvibrunos.json();
        return boloshi.data;
      } catch (error) {
        console.error('Error fetching name + color:', error);
      }
    }

    
    function displayResult(result) {
      let resultElement = document.getElementById('result');
      resultElement.textContent = `Name: ${result.name}, Color: ${result.color}`;
    }

    fetchNameAndColor().then(displayResult);
    // ყველა დარეფრეშებაზე ახალ ახალ ფერებს გვიჩვენებს



    function fetchData() {
        let fotoebi = new XMLHttpRequest();
        fotoebi.open('GET', 'https://reqres.in/api/users?page=2', true);
        fotoebi.onreadystatechange = function () {
            if (fotoebi.readyState === 4 && fotoebi.status === 200) {
                let data = JSON.parse(fotoebi.responseText);
                data.data.forEach(function (item) {
                    let name = item.first_name + ' ' + item.last_name;
                    let img = item.avatar;
                    let output = '<div><h2>' + name + '</h2><img src="' + img + '" alt="' + name + '"></div>';
                    document.getElementById('output').innerHTML += output;
                });
            }
        };
        fotoebi.send();
    }
