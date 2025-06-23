let data = [
{"id":1,"first_name":"Kelley","email":"kromke0@oracle.com","phone":"4219983740"},
{"id":2,"first_name":"Trisha","email":"tjeacock1@posterous.com","phone":"1768800798"},
{"id":3,"first_name":"Chevalier","email":"cdornin2@indiatimes.com","phone":"5936829449"},
{"id":4,"first_name":"Lani","email":"lbidgood3@hhs.gov","phone":"5568221305"},
{"id":5,"first_name":"Reginauld","email":"rduggan4@dion.ne.jp","phone":"6491138357"},
{"id":6,"first_name":"Filippo","email":"fseaborne5@google.ca","phone":"4819740531"},
{"id":7,"first_name":"Tilly","email":"tturgoose6@dagondesign.com","phone":"7615025300"},
{"id":8,"first_name":"Gearard","email":"ggaywood7@businessweek.com","phone":"4184062865"},
{"id":9,"first_name":"Aldon","email":"akittel8@umn.edu","phone":"4238285831"},
{"id":10,"first_name":"Curcio","email":"crey9@hibu.com","phone":"4422325463"},
{"id":11,"first_name":"Rebekah","email":"rricarda@over-blog.com","phone":"2032114387"},
{"id":12,"first_name":"Abie","email":"asturgessb@feedburner.com","phone":"6388696924"},
{"id":13,"first_name":"Inga","email":"igawkesc@slashdot.org","phone":"4712545633"},
{"id":14,"first_name":"Lula","email":"lstenerd@washingtonpost.com","phone":"9728811436"},
{"id":15,"first_name":"Athene","email":"apoulsene@wisc.edu","phone":"1445467453"},
{"id":16,"first_name":"Nonie","email":"nbachmannf@home.pl","phone":"1226985146"},
{"id":17,"first_name":"Myrvyn","email":"mlathburyg@sitemeter.com","phone":"4567498390"},
{"id":18,"first_name":"Sadie","email":"sbreakspearh@comcast.net","phone":"5518793711"},
{"id":19,"first_name":"Yoshi","email":"ychalkeri@biblegateway.com","phone":"9367906590"},
]

console.log(data)
data.map((ele) => console.log(ele.first_name + "-" + ele.email + "-" + ele.phone))

let tbody = document.querySelector("#tbody")
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")

// console.log(tbody)

form.onsubmit = function(e){

    e.preventDefault()

    let obj = {
        id: data.length+1,
        first_name: name.value,
        email: email.value,
        phone: phone.value
    }

    data.push(obj)

    console.log(obj)

    showData(data)

    name.value = ""
    email.value = ""
    phone.value = ""
     
}


function showData(newData){
    newData.map(function(ele){
        let newtr = `<tr>
                        <td>${ele.id}</td>
                        <td>${ele.first_name}</td>
                        <td>${ele.email}</td>
                        <td>${ele.phone}</td>
                     </tr>`

            tbody.innerHTML += newtr
    })
}

showData(data)