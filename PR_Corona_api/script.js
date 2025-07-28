let form = document.querySelector("#countriesForm")
let input = document.querySelector("#countriesInput")
let card = document.querySelector("#coronaCard")

form.addEventListener("submit", async (ele) => {
    ele.preventDefault()

    let country = input.value.trim()
    if (!country) return

    try {
        let res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        let data = await res.json()

        card.innerHTML = `
                    <div class="card text-dark bg-white shadow>
                        <div class="card-header text-center">
                            <h2>${data.country} <img src="${data.countryInfo.flag}" width="30" class="ms-2 rounded shadow-sm" alt="Flag"/></h2>
                        </div>
                        <div class="card-body">
                            <div class="row text-center">
                                ${generateState("Total Cases", data.cases, "danger")}
                                ${generateState("Recovered Cases", data.recovered, "success")}
                                ${generateState("Deaths Cases", data.deaths, "dark")}
                                ${generateState("Active Cases", data.active, "warning text-dark")}
                            </div>
                        </div>
                    </div>
        `
    }
     catch (error) {
        card.innerHTML = `<p class="text-danger">Data not found or API error. Please try another country.</p>`
    }
})

function generateState(label, value, badgeClass){
    return `
        <div class="col-md-3 mb-2">
            <div class="bg-light rounded p-3 shadow">
                <h5 class="text-muted">${label}</h5>
                <span class="badge bg-${badgeClass} fs-5">${value.toLocaleString()}</span>
            </div>
        </div>
    `
}